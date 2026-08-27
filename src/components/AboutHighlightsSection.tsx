import Image from "next/image";
import { site } from "@/data/site";

export function AboutHighlightsSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="shell about__grid">
        <div className="about__visuals">
          <div className="about__image about__image--main">
            <Image
              src={site.about.images[0].src}
              alt={site.about.images[0].alt}
              fill
              sizes="(max-width: 767px) 78vw, 38vw"
            />
          </div>
          <div className="about__image about__image--secondary">
            <Image
              src={site.about.images[1].src}
              alt={site.about.images[1].alt}
              fill
              sizes="(max-width: 767px) 42vw, 20vw"
            />
          </div>
        </div>

        <div className="about__copy">
          <p className="section-kicker">ABOUT US</p>
          <h2 id="about-heading" aria-label={site.about.heading}>
            <span className="about-heading__mobile" aria-hidden="true">
              <span className="heading-line">
                {site.about.mobileHeadingParts[0]}
              </span>
              <span className="heading-line text-nowrap">
                {site.about.mobileHeadingParts[1]}
              </span>
            </span>
            <span className="about-heading__desktop" aria-hidden="true">
              <span className="heading-line">{site.about.headingParts[0]}</span>
              <span className="heading-line">
                <span className="text-nowrap">{site.about.headingParts[1]}</span>
                <span className="about-heading__bar text-nowrap">
                  {site.about.headingParts[2]}
                </span>
              </span>
            </span>
          </h2>
          <p>{site.about.body}</p>

          <ol className="highlights" aria-label="店舗の3つの特徴">
            {site.about.highlights.map((highlight, index) => (
              <li key={highlight}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{highlight}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
