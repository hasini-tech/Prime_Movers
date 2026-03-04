import { Play, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const PodcastSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-purple opacity-20" />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          The <span className="text-gradient-gold">Prime Podcast</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Every founder has a story worth telling. The Prime Podcast gives our members a
          platform to share their journey, amplify their brand, and inspire the next
          generation of builders.
        </p>
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 flex-shrink-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group cursor-pointer hover:border-primary/60 transition-all duration-300">
              <Play className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase flex items-center justify-center md:justify-start gap-2 mb-3">
                <Headphones className="w-4 h-4" /> Featured Episode
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                From Zero to $10M — A Prime Mover Story
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hear how one of our founding members leveraged strategic connections,
                investor introductions, and relentless execution to build an
                eight-figure company in under two years.
              </p>
              <Button variant="goldOutline" size="lg">
                Be Featured
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
