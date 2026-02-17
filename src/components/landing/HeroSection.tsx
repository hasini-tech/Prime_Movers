import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 gradient-purple" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-up"
        >
          Where Entrepreneurs Build{" "}
          <span className="text-gradient-gold">Powerful Networks</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Connect. Raise Capital. Grow.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="gold" size="xl" onClick={scrollToForm}>
            Apply to Join
          </Button>
          <Button variant="goldOutline" size="xl" onClick={scrollToForm}>
            Become a Founding Member
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
