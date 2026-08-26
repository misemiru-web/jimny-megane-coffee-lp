"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { CloseIcon, MapPinIcon, MenuIcon } from "./Icons";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className={`site-header${isScrolled || isOpen ? " is-active" : ""}`}>
      <div className="site-header__inner">
        <a className="text-logo" href="#top" aria-label="ページ上部へ">
          {site.name}
        </a>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="header-map-link"
            href={site.urls.googleMaps}
            target="_blank"
            rel="noreferrer"
          >
            <MapPinIcon /> MAP
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav
        className="mobile-nav"
        id="mobile-menu"
        aria-label="モバイルナビゲーション"
        hidden={!isOpen}
      >
        {site.navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
        <a
          className="mobile-nav__map"
          href={site.urls.googleMaps}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
        >
          <MapPinIcon /> Googleマップを開く
        </a>
      </nav>
    </header>
  );
}
