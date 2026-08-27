import { ctaLabels, site } from "@/data/site";
import { CtaLink } from "./CtaLink";
import { InstagramIcon } from "./Icons";

export function YorimichiSection() {
  return (
    <section
      className="section yorimichi"
      id="yorimichi"
      aria-labelledby="yorimichi-heading"
    >
      <div className="shell yorimichi__grid">
        <div className="yorimichi__intro">
          <p className="section-kicker">YORIMICHI</p>
          <h2 id="yorimichi-heading" aria-label={site.yorimichi.heading}>
            <span className="yorimichi-heading__mobile" aria-hidden="true">
              <span className="yorimichi-heading__phrase">
                {site.yorimichi.mobileHeadingParts[0]}
              </span>
              <span className="yorimichi-heading__phrase">
                {site.yorimichi.mobileHeadingParts[1]}
              </span>
            </span>
            <span className="yorimichi-heading__desktop" aria-hidden="true">
              <span className="yorimichi-heading__phrase">
                {site.yorimichi.headingParts[0]}
              </span>
              <span className="yorimichi-heading__phrase yorimichi-heading__phrase--join">
                {site.yorimichi.headingParts[1]}
              </span>
              <span className="yorimichi-heading__phrase yorimichi-heading__phrase--join">
                {site.yorimichi.headingParts[2]}
              </span>
            </span>
          </h2>
          <p className="yorimichi__label">{site.yorimichi.label}</p>
        </div>

        <div className="yorimichi__list">
          {site.yorimichi.examples.map((example, index) => (
            <article key={example}>
              <span>0{index + 1}</span>
              <h3>{example}</h3>
            </article>
          ))}
          <p className="yorimichi__note">{site.yorimichi.note}</p>
          <CtaLink
            href={site.urls.instagram}
            icon={<InstagramIcon />}
            variant="secondary"
          >
            {ctaLabels.instagramPosts}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
