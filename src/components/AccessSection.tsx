import { ctaLabels, site } from "@/data/site";
import { CtaLink } from "./CtaLink";

export function AccessSection() {
  return (
    <section className="section access" id="access" aria-labelledby="access-heading">
      <div className="shell access__grid">
        <div className="access__heading">
          <p className="section-kicker">COME BY AND SAY HELLO</p>
          <h2 id="access-heading">ACCESS</h2>
          <p className="access__large-copy">{site.sampleDescription}</p>
        </div>

        <div className="access__details">
          <p className="access__name">{site.name}</p>
          <p>{site.businessType}</p>
          <p className="access__note">{site.sampleNote}</p>
          <div className="button-group">
            <CtaLink href={site.links.menu}>
              {ctaLabels.menu}
            </CtaLink>
            <CtaLink
              href={site.links.gallery}
              variant="secondary"
            >
              {ctaLabels.gallery}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
