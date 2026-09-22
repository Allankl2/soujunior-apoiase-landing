import { Header } from "@/app/soujunior/_components/header/header";
import { HeroSection } from "@/app/soujunior/_components/hero-section/hero-section";
import { About } from "@/app/soujunior/_components/about-section/about";
import { Footer } from "@/app/soujunior/_components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
      </main>
      <Footer />
    </>
  );
}
