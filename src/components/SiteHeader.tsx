"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { assetPath } from "@/lib/asset-path";
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
        <a
          className="site-header__logo"
          href="#top"
          aria-label={`${site.name}｜ページ上部へ`}
        >
          <Image
            src={assetPath("/branding/jimny-megane-coffee-header-logo.png")}
            alt={site.name}
            width={2172}
            height={724}
            priority
            sizes="(max-width: 767px) 45vw, 204px"
          />
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
