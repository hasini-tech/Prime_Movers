const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
          An Ecosystem for the{" "}
          <span className="text-gradient-gold">Ambitious</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          We are a curated community of founders, investors, and operators who believe that the right connections
          can transform businesses. Our members gain access to capital, strategic partnerships, and a network
          that accelerates growth — not just connections, but real collaboration.
        </p>
        <div className="w-24 h-0.5 bg-primary mx-auto" />
      </div>
    </section>
  );
};

export default AboutSection;
