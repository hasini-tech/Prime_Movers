import { FileText, ShieldCheck, Lock, Rocket, Eye } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const steps = [
  { icon: FileText, title: "Apply", description: "Submit your application with your business details." },
  { icon: ShieldCheck, title: "Qualification & Review", description: "Our team evaluates fit, ambition, and alignment." },
  { icon: Lock, title: "Private Member Access", description: "Gain entry to the ecosystem, resources, and network." },
  { icon: Rocket, title: "Events & Capital", description: "Attend exclusive events and access funding opportunities." },
  { icon: Eye, title: "Growth & Visibility", description: "Scale your business and amplify your brand." },
];

const StepContent = ({ step, index, compact = false }) => (
  <>
    <div className={`${compact ? "w-20 h-20" : "w-24 h-24"} depth-card mx-auto mb-6 rounded-full border-2 border-primary/30 flex items-center justify-center bg-background relative z-10`}>
      <step.icon className={`${compact ? "w-8 h-8" : "w-10 h-10"} text-primary`} />
    </div>
    <span className="text-primary font-display text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 block">
      Step {index + 1}
    </span>
    <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 leading-tight">{step.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
  </>
);

const HowItWorksSection = () => {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          How <span className="text-gradient-gold">Prime Movers</span> Works
        </h2>

        <div className="hidden md:grid grid-cols-5 gap-6 relative">
          <div className="absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center relative"
            >
              <StepContent step={step} index={index} />
            </motion.div>
          ))}
        </div>

        <Carousel
          opts={{ align: "center", loop: true }}
          className="md:hidden pb-12"
          aria-label="How Prime Movers works steps"
        >
          <CarouselContent className="-ml-3">
            {steps.map((step, index) => (
              <CarouselItem key={step.title} className="basis-[86%] pl-3">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-card depth-card min-h-[280px] rounded-xl p-7 text-center"
                >
                  <StepContent step={step} index={index} compact />
                </motion.div>
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

export default HowItWorksSection;
