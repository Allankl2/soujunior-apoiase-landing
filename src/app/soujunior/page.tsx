import { Header } from "@/app/soujunior/_components/header/header";
import { HeroSection } from "@/app/soujunior/_components/hero-section/hero-section";
import { About } from "@/app/soujunior/_components/about-section/about";
import { IniciativasSection } from '@/app/soujunior/_components/problem-section/iniciativas-section';
import { Transparency } from "@/app/soujunior/_components/transparency-section/transparency";
import { Closing } from "@/app/soujunior/_components/closing-section/closing";
import { Participate } from "@/app/soujunior/_components/participate-section/participate";
import { Footer } from "@/app/soujunior/_components/footer/footer";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />

        <IniciativasSection />

        <Participate />
        <Transparency />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
