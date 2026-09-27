import { ctaLabels, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <strong className="site-footer__wordmark">{site.name}</strong>
          <p>{site.businessType}</p>
        </div>
        <p>FICTIONAL BRAND / PORTFOLIO SAMPLE</p>
        <a href={site.links.top}>{ctaLabels.pageTop}</a>
        {site.sampleMode && (
          <div className="sample-badge">
            <strong>ミセミルWeb 制作デザインサンプル</strong>
            <span>{site.sampleNote}</span>
          </div>
        )}
      </div>
    </footer>
  );
}
