import { Check } from "lucide-react";

const profiles = [
  "Growth-focused founders",
  "Ambitious entrepreneurs",
  "Scaling business owners",
  "Angel investors",
  "Ecosystem leaders",
];

const WhoShouldJoinSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-purple opacity-20" />
      <div className="relative container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          This Is <span className="text-gradient-gold">Not for Everyone.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Prime Movers is curated, not open. We select members who are committed to building
          something meaningful and contributing to the collective growth of the ecosystem.
        </p>
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-xl mx-auto mb-12">
          <ul className="space-y-4 text-left">
            {profiles.map((profile) => (
              <li key={profile} className="flex items-center gap-4 text-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">{profile}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-display text-xl md:text-2xl font-semibold text-foreground">
          Prime Movers is built for serious operators,{" "}
          <span className="text-gradient-gold">not spectators.</span>
        </p>
      </div>
    </section>
  );
};

export default WhoShouldJoinSection;
