import { ctaLabels, site } from "@/data/site";
import { CtaLink } from "./CtaLink";
import { ArrowIcon, InstagramIcon } from "./Icons";

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
          <h2 id="yorimichi-heading">{site.yorimichi.heading}</h2>
          <p className="yorimichi__label">{site.yorimichi.label}</p>
        </div>

        <div className="yorimichi__list">
          {site.yorimichi.examples.map((example, index) => (
            <article key={example}>
              <span>0{index + 1}</span>
              <h3>{example}</h3>
              <ArrowIcon />
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
