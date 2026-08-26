import Image from "next/image";
import { ctaLabels, site } from "@/data/site";
import { CtaLink } from "./CtaLink";
import { ArrowIcon, InstagramIcon } from "./Icons";

export function DrinkFoodSection() {
  return (
    <section className="section menu-section" id="menu" aria-labelledby="menu-heading">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">MENU</p>
            <h2 id="menu-heading">DRINK &amp; FOOD</h2>
          </div>
        </div>

        <div className="menu-grid">
          {site.menu.map((item, index) => (
            <article className="menu-card" key={item.category}>
              <div className="menu-card__image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>
              <div className="menu-card__content">
                <span className="menu-card__number">0{index + 1}</span>
                <h3>{item.category}</h3>
                <p>{item.item}</p>
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>

        <div className="section-action">
          <CtaLink
            href={site.urls.instagram}
            icon={<InstagramIcon />}
            variant="secondary"
          >
            {ctaLabels.instagram}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
