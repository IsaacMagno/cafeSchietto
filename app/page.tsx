import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Reservas from "@/components/sections/Reservas";
import Social from "@/components/sections/Social";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";
import CafeJsonLd from "@/components/seo/CafeJsonLd";
import SectionDivider from "@/components/ui/SectionDivider";
import BackToTop from "@/components/ui/BackToTop";
import Marquee from "@/components/ui/Marquee";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <CafeJsonLd />
      <ScrollProgress />
      <Hero />
      <Marquee />
      <About />
      <Gallery />
      <Reservas />
      <SectionDivider />
      <Social />
      <SectionDivider />
      <Location />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
}
