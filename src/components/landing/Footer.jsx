const Footer = () => (
  <footer className="py-12 border-t border-border/30">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg font-bold text-gradient-gold">PRIME MOVERS</span>
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="mailto:hello@primemovers.com" className="hover:text-primary transition-colors">
            hello@primemovers.com
          </a>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mt-6 text-center md:text-left">
        © {new Date().getFullYear()} Prime Movers. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
