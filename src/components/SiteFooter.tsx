import Image from "next/image";
import { site } from "@/data/site";
import { InstagramIcon } from "./Icons";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__logo-frame">
            <Image
              className="site-footer__logo"
              src="/branding/jimny-megane-coffee-footer-logo.png"
              alt={site.name}
              width={2172}
              height={724}
              sizes="(max-width: 767px) 290px, 18vw"
            />
          </div>
          <p>{site.businessType}</p>
        </div>
        <address>{site.address}</address>
        <a href={site.urls.instagram} target="_blank" rel="noreferrer">
          <InstagramIcon /> Instagram
        </a>
        {site.sampleMode && (
          <div className="sample-badge">
            <strong>営業提案用サンプル</strong>
            <span>{site.sampleNote}</span>
          </div>
        )}
      </div>
    </footer>
  );
}
