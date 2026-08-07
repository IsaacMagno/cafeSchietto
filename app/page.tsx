import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Social from "@/components/sections/Social";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/ui/SectionDivider";
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Social />
      <SectionDivider />
      <Location />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
}
