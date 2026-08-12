import { Button } from "@/components/ui/button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/PrimeMovers-removebg.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          width: isScrolled ? "calc(100vw - 24px)" : "min(360px, calc(100vw - 32px))",
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto max-w-[1080px] rounded-2xl border border-white/12 bg-black/72 shadow-2xl shadow-black/35 backdrop-blur-2xl"
      >
        <motion.div
          animate={{ height: isScrolled ? 62 : 56 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center px-4 sm:px-6 ${isScrolled ? "justify-between" : "justify-center"}`}
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center gap-3 rounded-md text-left transition-transform duration-300 hover:scale-[1.03]"
            aria-label="Back to top"
          >
            <img
              src={logo}
              alt="Prime Movers"
              className={`object-contain transition-all duration-300 ${isScrolled ? "h-10 w-24 sm:h-11 sm:w-28" : "h-10 w-32 sm:h-11 sm:w-36"}`}
            />
          </button>

          <motion.div
            initial={false}
            className={isScrolled ? "block" : "absolute right-4 sm:right-6"}
            animate={{
              opacity: isScrolled ? 1 : 0,
              x: isScrolled ? 0 : 16,
              pointerEvents: isScrolled ? "auto" : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToForm}
              className="h-9 px-3 text-xs text-foreground/70 hover:text-primary sm:px-4 sm:text-sm"
            >
              Join Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
