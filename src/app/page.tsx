import { AboutHighlightsSection } from "@/components/AboutHighlightsSection";
import { AccessSection } from "@/components/AccessSection";
import { DrinkFoodSection } from "@/components/DrinkFoodSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { MotionController } from "@/components/MotionController";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { YorimichiSection } from "@/components/YorimichiSection";

export default function Home() {
  return (
    <>
      <MotionController />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutHighlightsSection />
        <DrinkFoodSection />
        <YorimichiSection />
        <GallerySection />
        <AccessSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
