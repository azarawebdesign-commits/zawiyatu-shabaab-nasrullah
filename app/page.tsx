import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Activities from "@/components/Activities";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FeaturedProducts from "@/components/store/FeaturedProducts";
import PastEvents from "@/components/PastEvents";

export default function Home() {
  {
    return (
      <main>
        <Hero />
        <FeaturedProducts/>
        <AboutSection />
        <Activities />
        <Events />
        <PastEvents/>
        <Gallery />
        <Contact />
        <Footer />
      </main>
    );
  }
}