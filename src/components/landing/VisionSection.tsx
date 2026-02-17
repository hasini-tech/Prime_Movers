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
            Prime Movers is not a community — it's an ecosystem. A long-term infrastructure
            designed for founders who think in decades, not quarters. Every member is hand-selected
            for their ambition, capability, and willingness to contribute to collective growth.
          </p>
          <p>
            Here, strategic relationships are the currency. Access to capital is a feature, not
            a dream. Shared growth is the default mode of operation. And collective influence
            is what separates this room from every other network you've been part of.
          </p>
          <p>
            We've architected Prime Movers around one principle:{" "}
            <span className="text-foreground font-semibold">
              the right room changes everything.
            </span>{" "}
            When ambitious operators surround themselves with equally driven peers, investors,
            and mentors — breakthroughs become inevitable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
