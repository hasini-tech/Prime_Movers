import { Play, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const featuredEpisode = {
  eyebrow: "Featured Episode",
  title: "From Zero to $10M - A Prime Mover Story",
  description:
    "Hear how one of our founding members leveraged strategic connections, investor introductions, and relentless execution to build an eight-figure company in under two years.",
  ctaLabel: "Be Featured",
};

const sectionCopy = {
  title: "The",
  highlightedTitle: "Prime Podcast",
  description:
    "Every founder has a story worth telling. The Prime Podcast gives our members a platform to share their journey, amplify their brand, and inspire the next generation of builders.",
};

const PodcastPlayButton = () => (
  <button
    type="button"
    className="group flex h-40 w-full max-w-[260px] flex-shrink-0 cursor-pointer items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-all duration-300 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-44 sm:w-44 md:h-48 md:w-48"
    aria-label="Play featured Prime Podcast episode"
  >
    <Play className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 md:h-16 md:w-16" />
  </button>
);

const FeaturedEpisodeCard = () => (
  <motion.article
    initial={{ opacity: 0, y: 34 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="glass-card depth-card mx-auto max-w-4xl rounded-2xl p-5 sm:p-8 md:p-12"
  >
    <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
      <PodcastPlayButton />

      <div className="w-full text-center md:text-left">
        <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm md:justify-start">
          <Headphones className="h-4 w-4" />
          {featuredEpisode.eyebrow}
        </span>
        <h3 className="mb-3 font-display text-2xl font-bold leading-tight md:text-3xl">
          {featuredEpisode.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {featuredEpisode.description}
        </p>
        <Button variant="goldOutline" size="lg" className="shine-sweep w-full sm:w-auto">
          {featuredEpisode.ctaLabel}
        </Button>
      </div>
    </div>
  </motion.article>
);

const PodcastSection = () => {
  return (
    <section className="section-shell relative py-20 sm:py-24">
      <div className="absolute inset-0 gradient-purple opacity-20" />
      <div className="relative container mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          {sectionCopy.title}{" "}
          <span className="text-gradient-gold">{sectionCopy.highlightedTitle}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {sectionCopy.description}
        </p>
        <FeaturedEpisodeCard />
      </div>
    </section>
  );
};

export default PodcastSection;
