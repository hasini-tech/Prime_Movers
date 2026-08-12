import { Linkedin, Instagram, Mail, ArrowUpRight, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/PrimeMovers-removebg.png";

const XLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.936H5.023z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background pt-12 pb-8 overflow-hidden sm:pt-16">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-deep/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-10 mb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <img src={logo} alt="Prime Movers" className="w-32" />
            <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              Empowering visionary founders and community builders to shape the future. Join our network of leaders driving meaningful change.
            </p>
          </div>

          <div className="hidden lg:block" />

          <div className="space-y-5 sm:space-y-6">
            <h4 className="font-semibold text-foreground tracking-wide font-display text-lg">Connect With Us</h4>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <SocialLink href="https://youtube.com/@primemoverscommunity?si=gNInMEW9c2UoTak2" icon={<Youtube className="w-5 h-5" />} label="Youtube" />
              <SocialLink href="https://www.linkedin.com/company/primemoverscommunity" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/primemovers.official?igsh=MWtwajNwazJsbXY4dw==" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialLink href="https://x.com/PrimeMoversOfcl" icon={<XLogo className="w-4 h-4" />} label="X" />
            </div>
            <a href="mailto:primemoversnetwork@gmail.com" className="inline-flex max-w-full items-center gap-2 break-all text-sm text-gold hover:text-gold-glow transition-colors group">
              <Mail className="w-4 h-4 flex-shrink-0" />
              primemoversnetwork@gmail.com
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-70" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Prime Movers. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:bg-purple-deep/20 hover:text-gold hover:border-gold/30 transition-colors duration-300"
  >
    {icon}
  </motion.a>
);

export default Footer;
