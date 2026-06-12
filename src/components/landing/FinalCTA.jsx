import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 gradient-purple opacity-30" />
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">
          <span className="text-gradient-gold">Be Part of the Movement.</span>
        </h2>
        <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Connect with like-minded builders, receive community updates, discover opportunities, and stay informed about upcoming events, sessions, Podcast and meetups.
        </p>
        <Button variant="gold" size="xl" onClick={scrollToForm} className="animate-glow-pulse">
          Join the Community
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
