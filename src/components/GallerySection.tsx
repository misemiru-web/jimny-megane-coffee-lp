import Image from "next/image";
import { site } from "@/data/site";

export function GallerySection() {
  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-heading">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">SCENES FROM THE SHOP</p>
          <h2 id="gallery-heading">GALLERY</h2>
        </div>
        <div className="gallery-grid">
          {site.gallery.map((item, index) => (
            <figure className={`gallery-item gallery-item--${index + 1}`} key={item.label}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 50vw, 40vw"
              />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="gallery__note">実写真到着後、許可確認済み素材へ差し替えます。</p>
      </div>
    </section>
  );
}
