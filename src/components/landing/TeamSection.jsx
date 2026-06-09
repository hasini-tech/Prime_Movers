import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import yogeshImg from "@/assets/yogesh img.jpeg";
import dhaneshImg from "@/assets/Dhanesh img.jpeg";
import alwinImg from "@/assets/Alwin img.png";
import maniImg from "@/assets/Mani img.png";


const teamMembers = [
  {
    name: "Dhanesh Kandan J",
    role: "Founder & Community Lead",
    image: dhaneshImg, // Replace with your local path
    description: "Visionary leader driving the mission.",
  },
  {
    name: "Yogesh M",
    role: "Co-Founder & Lead Organizer",
    image: yogeshImg, // Replace with your local path
    description: "Strategic thinker shaping the future.",
  },
  {
    name: "Mani Kandan",
    role: "Community growth strategist",
    image: maniImg, // Replace with your local path
    description: "Fostering engagement and building connections.",
  },
  {
    name: "Alwin",
    role: "Lead Investor",
    image: alwinImg, // Replace with your local path
    description: "Providing resources and strategic guidance.",
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="team">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-brand-purple text-brand-purple bg-brand-purple/10">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-gold">Minds</span> Behind It
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A dedicated group of founders, community leaders, and investors working together to make this vision a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:border-brand-purple/50 transition-all duration-300 group h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <div>
                        <Badge className="mb-2 bg-brand-purple/20 text-brand-gold border-brand-purple/30">
                          {member.role}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      </div>
                      <div className="h-0 overflow-visible relative">
                        <p className="absolute top-0 left-0 right-0 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-purple/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2" />
    </section>
  );
};

export default TeamSection;
