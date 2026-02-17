const speakers = [
  { name: "Coming Soon", role: "Tech Visionary" },
  { name: "Coming Soon", role: "Venture Capitalist" },
  { name: "Coming Soon", role: "Serial Entrepreneur" },
  { name: "Coming Soon", role: "Growth Strategist" },
  { name: "Coming Soon", role: "Angel Investor" },
  { name: "Coming Soon", role: "Industry Pioneer" },
];

const SpeakersSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="text-gradient-gold">Speakers</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          World-class leaders share insights at our exclusive private events.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {speakers.map((speaker, i) => (
            <div key={i} className="text-center group">
              <div className="w-full aspect-square rounded-xl border-2 border-primary/20 bg-muted/30 mb-4 flex items-center justify-center group-hover:border-primary/60 transition-all duration-300 overflow-hidden">
                <span className="text-muted-foreground text-3xl font-display">?</span>
              </div>
              <h4 className="font-display font-semibold text-sm">{speaker.name}</h4>
              <p className="text-muted-foreground text-xs">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
