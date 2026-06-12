import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import VisionSection from "@/components/landing/VisionSection";
import PillarsSection from "@/components/landing/PillarsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhoShouldJoinSection from "@/components/landing/WhoShouldJoinSection";
import PodcastSection from "@/components/landing/PodcastSection";
import SpeakersSection from "@/components/landing/SpeakersSection";
import TeamSection from "@/components/landing/TeamSection";
import CommunityImpactSection from "@/components/landing/CommunityImpactSection";
import ApplicationForm from "@/components/landing/ApplicationForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <PillarsSection />
      {/*<HowItWorksSection />*/}
      {/*<WhoShouldJoinSection />*/}
      <PodcastSection />
      {/*<SpeakersSection />*/}
      <TeamSection />
      {/*<CommunityImpactSection />*/}
      {/*<ApplicationForm />*/}
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
