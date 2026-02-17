import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import PillarsSection from "@/components/landing/PillarsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PodcastSection from "@/components/landing/PodcastSection";
import SpeakersSection from "@/components/landing/SpeakersSection";
import ApplicationForm from "@/components/landing/ApplicationForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <HowItWorksSection />
      <PodcastSection />
      <SpeakersSection />
      <ApplicationForm />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
