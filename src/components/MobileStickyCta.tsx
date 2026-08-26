"use client";

import { useEffect, useState } from "react";
import { ctaLabels, site } from "@/data/site";
import { MapPinIcon } from "./Icons";

export function MobileStickyCta() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("#site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mobile-sticky-cta${footerVisible ? " is-hidden" : ""}`}>
      <a href={site.urls.googleMaps} target="_blank" rel="noreferrer">
        <MapPinIcon />
        {ctaLabels.mobileMap}
      </a>
    </div>
  );
}
