const VisionSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
          Built for Builders.{" "}
          <span className="text-gradient-gold">Designed for Leaders.</span>
        </h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12" />
        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            Prime Movers is a community built for entrepreneurs, founders, creators, and professionals who believe in the power of learning, collaboration, and growth.
          </p>
          <p>
            We connect ambitious individuals with experienced leaders, creating opportunities to share knowledge, build meaningful relationships, and unlock new possibilities. Through mentorship, networking, and real-world insights, Prime Movers helps people move from ideas to action and from potential to progress.
          </p>
          <p>

            <span className="text-foreground font-semibold">
              Because great journeys are rarely built alone.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
