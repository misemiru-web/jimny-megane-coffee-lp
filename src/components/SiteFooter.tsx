import { site } from "@/data/site";
import { InstagramIcon } from "./Icons";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <p className="site-footer__name">{site.name}</p>
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
