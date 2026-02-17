import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const stages = ["Idea Stage", "Pre-Seed", "Seed", "Series A+", "Profitable"];

const ApplicationForm = () => {
  const [selectedStage, setSelectedStage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Application submitted! We'll be in touch soon.");
  };

  return (
    <section id="apply" className="py-24 relative">
      <div className="absolute inset-0 gradient-purple opacity-20" />
      <div className="relative container mx-auto px-6 max-w-2xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient-gold">Enter</span> the Circle
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Membership is by application only. Tell us about yourself.
        </p>
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground/80">Full Name</label>
              <Input
                required
                placeholder="John Doe"
                className="bg-background/50 border-border/50 focus:border-primary h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground/80">Email</label>
              <Input
                required
                type="email"
                placeholder="john@company.com"
                className="bg-background/50 border-border/50 focus:border-primary h-12"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground/80">Company Name</label>
              <Input
                required
                placeholder="Your Company"
                className="bg-background/50 border-border/50 focus:border-primary h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground/80">Industry</label>
              <Input
                required
                placeholder="e.g. FinTech, SaaS, Health"
                className="bg-background/50 border-border/50 focus:border-primary h-12"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-foreground/80">LinkedIn Profile</label>
            <Input
              placeholder="https://linkedin.com/in/yourprofile"
              className="bg-background/50 border-border/50 focus:border-primary h-12"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-3 block text-foreground/80">Business Stage</label>
            <div className="flex flex-wrap gap-2">
              {stages.map((stage) => (
                <button
                  key={stage}
                  type="button"
                  onClick={() => setSelectedStage(stage)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    selectedStage === stage
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block text-foreground/80">
              Why do you want to join Prime Movers?
            </label>
            <Textarea
              required
              rows={4}
              placeholder="Tell us about your goals and what you're looking for..."
              className="bg-background/50 border-border/50 focus:border-primary resize-none"
            />
          </div>
          <Button variant="gold" size="xl" className="w-full">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
