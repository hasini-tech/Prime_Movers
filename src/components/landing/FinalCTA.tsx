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
          <span className="text-gradient-gold">Serious Builders Only.</span>
        </h2>
        <p className="text-muted-foreground text-xl mb-12 max-w-xl mx-auto">
          This isn't for everyone. It's for those ready to build, connect, and scale.
        </p>
        <Button variant="gold" size="xl" onClick={scrollToForm} className="animate-glow-pulse">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
