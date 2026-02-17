import { Users, TrendingUp, Mic, Calendar } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Strategic Networking",
    description: "Connect with vetted founders, investors, and industry leaders who share your ambition.",
  },
  {
    icon: TrendingUp,
    title: "Fundraising & Capital",
    description: "Direct access to angel investors, VCs, and funding opportunities curated for our members.",
  },
  {
    icon: Mic,
    title: "Business Podcast",
    description: "Share your story on our podcast and reach thousands of entrepreneurs worldwide.",
  },
  {
    icon: Calendar,
    title: "Exclusive Speaker Events",
    description: "Private sessions with world-class speakers, mentors, and industry pioneers.",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-purple opacity-30" />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-gradient-gold">Core Pillars</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card rounded-xl p-8 text-center group hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
