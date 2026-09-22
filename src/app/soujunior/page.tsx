import { Header } from "@/app/soujunior/_components/header/header";
import { HeroSection } from "@/app/soujunior/_components/hero-section/hero-section";
import { About } from "@/app/soujunior/_components/about-section/about";
import { EcosystemSection } from "@/app/soujunior/_components/ecosystem-section/ecosystem-section";
import { MetricsSection } from "@/app/soujunior/_components/metrics-section/metrics-section";
import { TestimonialsSection } from "@/app/soujunior/_components/testimonials-section/testimonials-section";
import { PartnersSection } from "@/app/soujunior/_components/partners-section/partners-section";
import { ImpactSection } from "@/app/soujunior/_components/impact-section/impact-section";
import { DonationSection } from "@/app/soujunior/_components/donation-section/donation-section";
import { CtaBannerSection } from "@/app/soujunior/_components/cta-banner-section/cta-banner-section";
import { Closing } from "@/app/soujunior/_components/closing-section/closing";
import { Footer } from "@/app/soujunior/_components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <EcosystemSection />
        <MetricsSection />
        <TestimonialsSection />
        <PartnersSection />
        <ImpactSection />
        <DonationSection />
        <CtaBannerSection />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
