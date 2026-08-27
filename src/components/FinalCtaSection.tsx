import { ctaLabels, site } from "@/data/site";
import { CtaLink } from "./CtaLink";
import { InstagramIcon, MapPinIcon } from "./Icons";

export function FinalCtaSection() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="shell final-cta__inner">
        <p className="final-cta__eyebrow">MOCHIMUNE, SHIZUOKA</p>
        <h2 id="final-cta-heading" aria-label={site.finalCta.heading}>
          <span className="final-cta__heading-line">{site.finalCta.headingParts[0]}</span>
          <span className="final-cta__heading-line">{site.finalCta.headingParts[1]}</span>
        </h2>
        <div className="button-group button-group--center">
          <CtaLink href={site.urls.googleMaps} icon={<MapPinIcon />} variant="light">
            {ctaLabels.map}
          </CtaLink>
          <CtaLink
            href={site.urls.instagram}
            icon={<InstagramIcon />}
            variant="light"
          >
            {ctaLabels.instagram}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
