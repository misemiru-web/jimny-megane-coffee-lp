import { ctaLabels, site } from "@/data/site";
import { CtaLink } from "./CtaLink";
import { InstagramIcon, MapPinIcon } from "./Icons";

export function AccessSection() {
  return (
    <section className="section access" id="access" aria-labelledby="access-heading">
      <div className="shell access__grid">
        <div className="access__heading">
          <p className="section-kicker">COME BY AND SAY HELLO</p>
          <h2 id="access-heading">ACCESS</h2>
          <div className="access__map">
            <iframe
              src={site.urls.googleMapsEmbed}
              title="Jimny megane coffee周辺のGoogleマップ"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        <div className="access__details">
          <p className="access__name">{site.name}</p>
          <p>{site.businessType}</p>
          <address>{site.address}</address>
          <p className="access__note">{site.latestInfoNote}</p>
          <div className="button-group">
            <CtaLink href={site.urls.googleMaps} icon={<MapPinIcon />}>
              {ctaLabels.map}
            </CtaLink>
            <CtaLink
              href={site.urls.instagram}
              icon={<InstagramIcon />}
              variant="secondary"
            >
              {ctaLabels.instagramBusiness}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
