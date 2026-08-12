import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="section-shell py-20 sm:py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Built for Builders.{" "}
          <span className="text-gradient-gold">Designed for Leaders.</span>
        </motion.h2>
        <div className="w-24 h-0.5 bg-primary mx-auto mb-12" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card depth-card rounded-xl p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            Prime Movers is a community built for entrepreneurs, founders, creators, and professionals who believe in the power of learning, collaboration, and growth.
          </p>
          <p>
            We connect ambitious individuals with experienced leaders, creating opportunities to share knowledge, build meaningful relationships, and unlock new possibilities. Through mentorship, networking, and real-world insights, Prime Movers helps people move from ideas to action and from potential to progress.
          </p>
          <p>

            <span className="text-foreground font-semibold">
              Because great journeys are rarely built alone.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
