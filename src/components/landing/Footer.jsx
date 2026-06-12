import { Twitter, Linkedin, Instagram, Mail, ArrowUpRight, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/PrimeMovers-removebg.png"

const XLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.936H5.023z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-8 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-deep/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <img src={logo} alt="logo" className="w-32" />
            <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              Empowering visionary founders and community builders to shape the future. Join our network of leaders driving meaningful change.
            </p>
          </div>

          {/* Empty column for spacing */}
          <div className="hidden lg:block"></div>

          {/* Contact / Socials */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground tracking-wide font-display text-lg">Connect With Us</h4>
            <div className="flex items-center gap-4">
              <SocialLink href="https://youtube.com/@primemoverscommunity?si=gNInMEW9c2UoTak2" icon={<Youtube className="w-5 h-5" />} label="Youtube" />
              <SocialLink href="https://www.linkedin.com/company/primemoverscommunity" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/primemovers.official?igsh=MWtwajNwazJsbXY4dw==" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialLink href="https://x.com/PrimeMoversOfcl" icon={<XLogo className="w-4 h-4" />} label="X (Twitter)" />
            </div>
            <a href="mailto:primemoversnetwork@gmail.com" className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-glow transition-colors group">
              <Mail className="w-4 h-4" />
              primemoversnetwork@gmail.com
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-70" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Prime Movers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
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
