import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Activities from "@/components/Activities";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  {
    return (
      <main>
        <Hero />
        <AboutSection />
        <Activities />
        <Events />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    );
  }
}