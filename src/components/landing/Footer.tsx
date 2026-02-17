const Footer = () => (
  <footer className="py-12 border-t border-border/30">
    <div className="container mx-auto px-6 text-center">
      <span className="font-display text-lg font-bold text-gradient-gold">THE NETWORK</span>
      <p className="text-muted-foreground text-sm mt-3">
        © {new Date().getFullYear()} The Network. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
