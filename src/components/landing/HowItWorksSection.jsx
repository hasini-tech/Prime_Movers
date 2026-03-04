import { FileText, ShieldCheck, Lock, Rocket, Eye } from "lucide-react";

const steps = [
  { icon: FileText, title: "Apply", description: "Submit your application with your business details." },
  { icon: ShieldCheck, title: "Qualification & Review", description: "Our team evaluates fit, ambition, and alignment." },
  { icon: Lock, title: "Private Member Access", description: "Gain entry to the ecosystem, resources, and network." },
  { icon: Rocket, title: "Events & Capital", description: "Attend exclusive events and access funding opportunities." },
  { icon: Eye, title: "Growth & Visibility", description: "Scale your business and amplify your brand." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          How <span className="text-gradient-gold">Prime Movers</span> Works
        </h2>
        <div className="hidden md:grid grid-cols-5 gap-6 relative">
          <div className="absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
          {steps.map((step, i) => (
            <div key={step.title} className="text-center relative">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-primary/30 flex items-center justify-center bg-background relative z-10">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-2 block">
                Step {i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-6 items-start">
              <div className="w-16 h-16 flex-shrink-0 rounded-full border-2 border-primary/30 flex items-center justify-center bg-background">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="text-primary font-display text-xs font-semibold tracking-widest uppercase mb-1 block">
                  Step {i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
