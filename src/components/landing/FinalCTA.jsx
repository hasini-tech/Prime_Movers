import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-shell py-20 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 gradient-purple opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-6 text-center"
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
          <span className="text-gradient-gold">Be Part of the Movement.</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-9 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Connect with like-minded builders, receive community updates, discover opportunities, and stay informed about upcoming events, sessions, Podcast and meetups.
        </p>
        <Button variant="gold" size="xl" onClick={scrollToForm} className="animate-glow-pulse shine-sweep w-full max-w-sm px-6 text-base sm:w-auto sm:px-12 sm:text-lg">
          Join the Community <ArrowRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
