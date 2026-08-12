import { Users, TrendingUp, Mic, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const pillars = [
  {
    icon: Users,
    title: "Strategic Networking",
    description: "Build valuable connections with founders, mentors, and industry leaders.",
    bullets: ["Curated member introductions", "Founder-to-founder connections", "Collaboration opportunities", "Exclusive networking events"],
  },
  {
    icon: TrendingUp,
    title: "Growth & Opportunities",
    description: "Access opportunities, resources, and guidance to grow faster.",
    bullets: ["Investor & mentor access", "Pitch feedback and reviews", "Startup growth discussions", "Business and funding insights"],
  },
  {
    icon: Mic,
    title: "Prime Podcast",
    description: "Share your journey, inspire others, and expand your reach.",
    bullets: ["Founder spotlights", "Success stories and lessons learned", "Business exposure and reach", "Community-driven conversations"],
  },
  {
    icon: Calendar,
    title: "Expert Talks & Founder Forums",
    description: "Learn from experienced founders and industry experts.",
    bullets: ["Entrepreneur fireside chats", "Expert-led sessions", "Interactive Q&A discussions", "Private roundtables and networking"],
  },
];

const PillarCard = ({ pillar, index, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: index * 0.08 }}
    viewport={{ once: true, margin: "-80px" }}
    className={`glass-card depth-card shine-sweep rounded-xl p-6 sm:p-8 group hover:border-primary/50 ${className}`}
  >
    <div className="depth-lift w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
      <pillar.icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="font-display text-xl font-semibold mb-3 text-center leading-tight">{pillar.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed text-center mb-4">
      {pillar.description}
    </p>
    <ul className="space-y-2">
      {pillar.bullets.map((bullet) => (
        <li key={bullet} className="text-muted-foreground text-sm flex items-start gap-2">
          <span className="text-primary mt-1 text-xs">◆</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const PillarsSection = () => {
  return (
    <section className="section-shell py-20 sm:py-24 relative">
      <div className="absolute inset-0 gradient-purple opacity-30" />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          The <span className="text-gradient-gold">Prime Movers Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          Connect. Learn. Grow. Lead.
        </p>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} className="h-full" />
          ))}
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="md:hidden pb-12"
          aria-label="Prime Movers experience cards"
        >
          <CarouselContent className="-ml-3">
            {pillars.map((pillar, index) => (
              <CarouselItem key={pillar.title} className="basis-[88%] pl-3">
                <PillarCard pillar={pillar} index={index} className="min-h-[380px]" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[calc(50%-44px)] top-auto bottom-0 border-primary/30 bg-background/70 text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="right-[calc(50%-44px)] top-auto bottom-0 border-primary/30 bg-background/70 text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default PillarsSection;
