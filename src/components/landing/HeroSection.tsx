import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 gradient-purple" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6 opacity-0 animate-fade-up">
          Prime Movers
        </h1>
        <p
          className="text-2xl md:text-3xl text-foreground/90 font-display font-medium mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Where Visionary Entrepreneurs Build{" "}
          <span className="text-gradient-gold">Power, Capital, and Influence.</span>
        </p>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Prime Movers is the ecosystem where serious founders access elite networks,
          strategic capital, and the visibility needed to dominate their industries.
          This is where empires are built — together.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Button variant="gold" size="xl" onClick={scrollToForm}>
            Apply to Join
          </Button>
          <Button variant="goldOutline" size="xl" onClick={scrollToForm}>
            Become a Founding Member
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
