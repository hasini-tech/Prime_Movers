import { Button } from "@/components/ui/button";
import logo from "../../assets/PrimeMovers-removebg.png"

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-32" />
        <Button variant="gold" size="sm" onClick={scrollToForm}>
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
