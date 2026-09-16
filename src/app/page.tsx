import { Header } from "@/components/sections/header/header";
import { HeroSection } from "@/components/sections/hero-section/hero-section";
import { AboutSection } from "@/components/sections/about-section/about-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section/ecosystem-section";
import { MetricsSection } from "@/components/sections/metrics-section/metrics-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section/testimonials-section";
import { PartnersSection } from "@/components/sections/partners-section/partners-section";
import { ImpactSection } from "@/components/sections/impact-section/impact-section";
import { DonationSection } from "@/components/sections/donation-section/donation-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section/cta-banner-section";
import { Footer } from "@/components/sections/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EcosystemSection />
        <MetricsSection />
        <TestimonialsSection />
        <PartnersSection />
        <ImpactSection />
        <DonationSection />
        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
