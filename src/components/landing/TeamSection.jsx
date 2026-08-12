import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import yogeshImg from "@/assets/yogesh img.jpeg";
import dhaneshImg from "@/assets/Dhanesh img.jpeg";
import alwinImg from "@/assets/Alwin img.png";
import maniImg from "@/assets/Mani img.png";

const sectionCopy = {
  title: "The People",
  highlightedTitle: "Behind",
  suffixTitle: "Prime Movers",
  description:
    "The individuals who came together with a shared vision to build a stronger community for learning, connection, and growth.",
};

const teamMembers = [
  {
    name: "Dhanesh Kandan J",
    role: "Founder & Community Lead",
    image: dhaneshImg,
    description: "Visionary leader driving the mission.",
  },
  {
    name: "Yogesh M",
    role: "Co-Founder & Lead Organizer",
    image: yogeshImg,
    description: "Strategic thinker shaping the future.",
  },
  {
    name: "Mani Kandan",
    role: "Community Growth Strategist",
    image: maniImg,
    description: "Fostering engagement and building connections.",
  },
  {
    name: "Alwin",
    role: "Organizer",
    image: alwinImg,
    description: "Providing resources and strategic guidance.",
  }
];

const TeamMemberCard = ({ member }) => (
  <Card className="group h-full overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
    <CardContent className="p-0">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80" />

        <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-0 flex-col justify-end p-5 transition-transform duration-300 sm:p-6 md:translate-y-6 md:group-hover:translate-y-0">
          <Badge className="mb-2 w-fit max-w-full border-primary/30 bg-primary/15 text-primary">
            {member.role}
          </Badge>
          <h3 className="mb-1 font-display text-xl font-bold leading-tight text-foreground">
            {member.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
            {member.description}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TeamMemberMotionCard = ({ member, index, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={className}
  >
    <TeamMemberCard member={member} />
  </motion.div>
);

const TeamSection = () => {
  return (
    <section className="section-shell py-20 sm:py-24 bg-background relative overflow-hidden" id="team">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {sectionCopy.title}{" "}
            <span className="text-gradient-gold">{sectionCopy.highlightedTitle}</span>{" "}
            {sectionCopy.suffixTitle}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {sectionCopy.description}
          </p>
        </motion.div>

        <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-4 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberMotionCard
              key={member.name}
              member={member}
              index={index}
              className="h-full"
            />
          ))}
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="pb-12 md:hidden"
          aria-label="Prime Movers team members"
        >
          <CarouselContent className="-ml-3">
            {teamMembers.map((member, index) => (
              <CarouselItem key={member.name} className="basis-[84%] pl-3">
                <TeamMemberMotionCard member={member} index={index} className="h-full" />
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

export default TeamSection;
