import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-xl font-bold text-gradient-gold tracking-wide">
          THE NETWORK
        </span>
        <Button variant="gold" size="sm" onClick={scrollToForm}>
          Apply Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
