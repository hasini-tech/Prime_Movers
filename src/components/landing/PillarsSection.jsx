import { Users, TrendingUp, Mic, Calendar } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Strategic Networking",
    description: "Curated connections that move the needle for your business.",
    bullets: ["Curated member access", "Founder collaborations", "Private networking events"],
  },
  {
    icon: TrendingUp,
    title: "Fundraising Access",
    description: "Direct pathways to capital through trusted investor networks.",
    bullets: ["Investor introductions", "Pitch review sessions", "Demo days", "Capital strategy workshops"],
  },
  {
    icon: Mic,
    title: "Prime Podcast",
    description: "Amplify your story and build authority in your space.",
    bullets: ["Feature members", "Amplify founder stories", "Increase business visibility"],
  },
  {
    icon: Calendar,
    title: "Exclusive Speaker Forums",
    description: "Intimate sessions with leaders who've built at scale.",
    bullets: ["Recognized entrepreneurs", "Industry leaders", "Private Q&A sessions", "Closed-door roundtables"],
  },
];

const PillarsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-purple opacity-30" />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          The <span className="text-gradient-gold">Prime Pillars</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Four foundational pillars that power the Prime Movers ecosystem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-center">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center mb-4">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">◆</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
