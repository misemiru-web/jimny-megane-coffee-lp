import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outputDir = "/private/tmp/jimny-megane-coffee-qa";
const targetUrl = "http://127.0.0.1:3000/";

await mkdir(outputDir, { recursive: true });

const chrome = spawn(
  chromePath,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--remote-debugging-port=0",
    `--user-data-dir=${outputDir}/chrome-profile`,
    "about:blank",
  ],
  { stdio: ["ignore", "ignore", "pipe"] },
);

const browserWebSocketUrl = await new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error("Chrome startup timed out")), 15000);
  chrome.stderr.setEncoding("utf8");
  chrome.stderr.on("data", (chunk) => {
    const match = chunk.match(/DevTools listening on (ws:\/\/[^\s]+)/);
    if (match) {
      clearTimeout(timer);
      resolve(match[1]);
    }
  });
  chrome.once("error", reject);
  chrome.once("exit", (code) => reject(new Error(`Chrome exited with ${code}`)));
});

const browserHttpOrigin = browserWebSocketUrl.replace(/^ws:/, "http:").replace(/\/devtools\/browser\/.+$/, "");
const targetResponse = await fetch(`${browserHttpOrigin}/json/new?${encodeURIComponent(targetUrl)}`, {
  method: "PUT",
});
const target = await targetResponse.json();

function createClient(url) {
  const socket = new WebSocket(url);
  const pending = new Map();
  const eventWaiters = new Map();
  const eventListeners = new Map();
  let nextId = 1;

  const ready = new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const request = pending.get(message.id);
      if (!request) return;
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
      return;
    }
    const waiters = eventWaiters.get(message.method) ?? [];
    eventWaiters.delete(message.method);
    waiters.forEach((resolve) => resolve(message.params));
    const listeners = eventListeners.get(message.method) ?? [];
    listeners.forEach((listener) => listener(message.params));
  });

  return {
    ready,
    async send(method, params = {}) {
      await ready;
      const id = nextId++;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params }));
      });
    },
    waitFor(method, timeout = 15000) {
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeout);
        const resolveWithTimer = (params) => {
          clearTimeout(timer);
          resolve(params);
        };
        const waiters = eventWaiters.get(method) ?? [];
        waiters.push(resolveWithTimer);
        eventWaiters.set(method, waiters);
      });
    },
    on(method, listener) {
      const listeners = eventListeners.get(method) ?? [];
      listeners.push(listener);
      eventListeners.set(method, listeners);
    },
    close() {
      socket.close();
    },
  };
}

const client = createClient(target.webSocketDebuggerUrl);
await client.ready;
await Promise.all([
  client.send("Page.enable"),
  client.send("Runtime.enable"),
  client.send("Log.enable"),
]);

const consoleErrors = [];
client.on("Runtime.exceptionThrown", (event) => {
  consoleErrors.push(`Uncaught: ${event.exceptionDetails?.text ?? "Unknown error"}`);
});
client.on("Log.entryAdded", (event) => {
  if (event.entry?.level === "error") {
    consoleErrors.push({ text: event.entry.text, url: event.entry.url ?? null });
  }
});
const dimensions = [
  { name: "mobile-375", width: 375, height: 812 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1440", width: 1440, height: 1000 },
];
const results = [];

for (const viewport of dimensions) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width < 768,
  });
  const loaded = client.waitFor("Page.loadEventFired");
  await client.send("Page.navigate", { url: targetUrl });
  await loaded;
  await new Promise((resolve) => setTimeout(resolve, 500));

  for (const sectionId of ["about", "menu", "yorimichi", "gallery", "access", "site-footer"]) {
    await client.send("Runtime.evaluate", {
      expression: `document.querySelector('#${sectionId}')?.scrollIntoView({ behavior: 'instant' })`,
    });
    await new Promise((resolve) => setTimeout(resolve, 140));
  }
  await client.send("Runtime.evaluate", {
    expression: "window.scrollTo({ top: 0, behavior: 'instant' })",
  });
  await new Promise((resolve) => setTimeout(resolve, 140));

  let menuKeyboardState = null;
  if (viewport.width < 768) {
    await client.send("Runtime.evaluate", {
      expression: "document.querySelector('.menu-button')?.focus()",
    });
    await client.send("Input.dispatchKeyEvent", {
      type: "keyDown",
      key: " ",
      code: "Space",
      text: " ",
      windowsVirtualKeyCode: 32,
    });
    await client.send("Input.dispatchKeyEvent", {
      type: "keyUp",
      key: " ",
      code: "Space",
      windowsVirtualKeyCode: 32,
    });
    await new Promise((resolve) => setTimeout(resolve, 100));
    const opened = await client.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `({
        expanded: document.querySelector('.menu-button')?.getAttribute('aria-expanded'),
        menuHidden: document.querySelector('#mobile-menu')?.hidden,
      })`,
    });
    await client.send("Input.dispatchKeyEvent", {
      type: "rawKeyDown",
      key: "Escape",
      code: "Escape",
      windowsVirtualKeyCode: 27,
    });
    await client.send("Input.dispatchKeyEvent", {
      type: "keyUp",
      key: "Escape",
      code: "Escape",
      windowsVirtualKeyCode: 27,
    });
    await new Promise((resolve) => setTimeout(resolve, 100));
    const closed = await client.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `({
        expanded: document.querySelector('.menu-button')?.getAttribute('aria-expanded'),
        menuHidden: document.querySelector('#mobile-menu')?.hidden,
      })`,
    });
    menuKeyboardState = { opened: opened.result.value, closed: closed.result.value };
  }

  const metrics = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const primary = document.querySelector('.hero__buttons .button--primary');
      const sticky = document.querySelector('.mobile-sticky-cta');
      const footer = document.querySelector('#site-footer');
      const links = [...document.querySelectorAll('a')];
      return {
        title: document.title,
        h1Count: document.querySelectorAll('h1').length,
        robots: document.querySelector('meta[name="robots"]')?.content ?? null,
        viewportWidth: document.documentElement.clientWidth,
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
        documentHeight: document.documentElement.scrollHeight,
        heroPrimaryBottom: primary?.getBoundingClientRect().bottom ?? null,
        heroPrimaryWithin1_3Viewport: primary ? primary.getBoundingClientRect().bottom <= innerHeight * 1.3 : false,
        stickyDisplay: sticky ? getComputedStyle(sticky).display : null,
        footerExists: Boolean(footer),
        sectionIds: [...document.querySelectorAll('main section[id]')].map((item) => item.id),
        mapLinkCount: links.filter((link) => link.href.startsWith('https://www.google.com/maps/place/')).length,
        instagramLinkCount: links.filter((link) => link.href === 'https://www.instagram.com/jimny_meganecoffee/').length,
        missingAnchorTargets: links
          .filter((link) => link.getAttribute('href')?.startsWith('#'))
          .map((link) => link.getAttribute('href'))
          .filter((href) => !document.querySelector(href)),
        localBusinessCount: document.querySelectorAll('script[type="application/ld+json"]').length,
        sampleVisible: [...document.querySelectorAll('*')].some((node) => node.children.length === 0 && node.textContent?.trim() === '営業提案用サンプル'),
      };
    })()`,
  });

  const layout = await client.send("Page.getLayoutMetrics");
  const { contentSize } = layout;
  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
    fromSurface: true,
    clip: {
      x: 0,
      y: 0,
      width: Math.ceil(contentSize.width),
      height: Math.ceil(contentSize.height),
      scale: 1,
    },
  });
  const screenshotPath = `${outputDir}/${viewport.name}.png`;
  await writeFile(screenshotPath, Buffer.from(screenshot.data, "base64"));

  await client.send("Runtime.evaluate", {
    expression:
      "document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' })",
  });
  await new Promise((resolve) => setTimeout(resolve, 350));
  const footerState = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const sticky = document.querySelector('.mobile-sticky-cta');
      const footer = document.querySelector('#site-footer');
      const stickyStyle = sticky ? getComputedStyle(sticky) : null;
      return {
        stickyVisibilityAtFooter: stickyStyle?.visibility ?? null,
        stickyOpacityAtFooter: stickyStyle?.opacity ?? null,
        footerTopAtPageEnd: footer?.getBoundingClientRect().top ?? null,
      };
    })()`,
  });

  results.push({
    viewport,
    ...metrics.result.value,
    ...footerState.result.value,
    menuKeyboardState,
    screenshotPath,
  });
}

console.log(JSON.stringify({ results, consoleErrors }, null, 2));
client.close();
chrome.kill("SIGTERM");
