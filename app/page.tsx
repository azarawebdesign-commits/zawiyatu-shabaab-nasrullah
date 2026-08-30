import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import JourneyPreview from "@/components/JourneyPreview";
import LeadershipPage from "./leadership/page";

export default function Home() {
  return (
    <main>

      <Hero />

      <AboutSection />

      <JourneyPreview />

      <LeadershipPage />

      <Gallery />

      <Footer />

    </main>
  );
}