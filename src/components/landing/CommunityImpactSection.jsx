const stats = [
  { value: "100+", label: "Founders" },
  { value: "$5M+", label: "Capital Raised" },
  { value: "40+", label: "Strategic Partnerships" },
  { value: "25+", label: "Events Hosted" },
];

const CommunityImpactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-purple opacity-30" />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          Community <span className="text-gradient-gold">Impact</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center glass-card rounded-xl p-8">
              <span className="font-display text-4xl md:text-5xl font-bold text-gradient-gold block mb-2">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CommunityImpactSection;
