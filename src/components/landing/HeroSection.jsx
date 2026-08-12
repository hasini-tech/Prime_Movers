import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import networkingPeople from "@/assets/images/networkingpeople.png";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 130]);

  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-shell relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 pb-16 pt-32 sm:pt-36 lg:pt-28">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${networkingPeople})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-background/78" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/25 to-background/95" />
      <div className="absolute inset-0 gradient-purple" />
      <motion.div
        className="absolute left-1/2 top-24 h-72 w-[min(78vw,760px)] -translate-x-1/2 rounded-[50%] border border-primary/20 bg-primary/10 blur-3xl"
        style={{ y: heroY }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-56 bg-gradient-to-t from-background via-background/75 to-transparent" />

      <motion.div className="relative z-10 container mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-primary/35 bg-background/55 px-3.5 py-2 text-xs font-bold text-primary shadow-2xl backdrop-blur-xl sm:px-5 sm:text-sm"
        >
          <span className="truncate">Curated founder ecosystem</span>
        </motion.div>
        <h1 className="mx-auto mb-5 max-w-5xl font-display text-[clamp(3.75rem,11vw,7.75rem)] font-bold leading-[0.9] opacity-0 animate-fade-up drop-shadow-2xl">
          Prime <span className="text-gradient-gold">Movers</span>
        </h1>
        <p
          className="mb-5 font-display text-2xl font-medium text-foreground/90 opacity-0 animate-fade-up sm:text-3xl md:text-4xl"
          style={{ animationDelay: "0.15s" }}
        >
          Founders <span className="text-gradient-gold">Backing</span> Founders{" "}
        </p>
        <p
          className="mx-auto mb-9 max-w-3xl text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-up sm:mb-11 sm:text-lg md:text-xl"
          style={{ animationDelay: "0.3s" }}
        >
          Building a strong support system where entrepreneurs, founders, creators, and professionals connect, learn, grow, and succeed together.
        </p>
        <div
          className="mx-auto flex w-full max-w-md flex-col items-stretch gap-3 opacity-0 animate-fade-up sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          style={{ animationDelay: "0.45s" }}
        >
          <Button variant="gold" size="xl" onClick={scrollToForm} className="shine-sweep h-[52px] w-full px-6 text-base sm:h-14 sm:w-auto sm:min-w-52 sm:px-10 sm:text-lg">
            Join Now <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="goldOutline" size="xl" onClick={scrollToForm} className="h-[52px] w-full px-6 text-base sm:h-14 sm:w-auto sm:min-w-80 sm:px-10 sm:text-lg">
            Become a Founding Member
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
