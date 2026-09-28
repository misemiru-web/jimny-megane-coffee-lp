"use client";

import { useEffect, useState } from "react";
import { ctaLabels, site } from "@/data/site";

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
      <a href={site.links.menu}>
        {ctaLabels.mobileMenu}
      </a>
    </div>
  );
}
