const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
          <p>Copyright © {currentYear} Towfik Ahmed Razin</p>
          <nav className="flex items-center gap-4">
            <a
              href="#home"
              className="hover:text-foreground transition-colors"
            >
              Home
            </a>
            <span>|</span>
            <a
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
