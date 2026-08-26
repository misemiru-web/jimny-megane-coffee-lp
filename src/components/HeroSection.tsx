import Image from "next/image";
import { ctaLabels, site } from "@/data/site";
import { CtaLink } from "./CtaLink";
import { InstagramIcon, MapPinIcon } from "./Icons";

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__content">
        <div className="hero__copy">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 id="hero-heading">{site.hero.heading}</h1>
          <p className="hero__body">{site.hero.body}</p>
          <div className="button-group hero__buttons">
            <CtaLink href={site.urls.googleMaps} icon={<MapPinIcon />}>
              {ctaLabels.map}
            </CtaLink>
            <CtaLink
              href={site.urls.instagram}
              icon={<InstagramIcon />}
              variant="secondary"
            >
              {ctaLabels.instagram}
            </CtaLink>
          </div>
          <div className="hero__meta">
            <p>{site.address}</p>
            <p>{site.latestInfoNote}</p>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <Image
          src={site.hero.image}
          alt={site.hero.imageAlt}
          fill
          priority
          sizes="(max-width: 767px) 100vw, 58vw"
        />
        <span className="placeholder-label">PHOTO PLACEHOLDER</span>
      </div>
    </section>
  );
}
