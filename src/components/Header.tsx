import { Github, Linkedin, Facebook, Mail, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="pt-12 pb-8 border-b border-border">
      <div className="container max-w-3xl mx-auto px-6">
        {/* Name and Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-mono font-medium text-foreground tracking-tight">
            Towfik Ahmed Razin
          </h1>
          <nav className="flex items-center gap-1 text-sm font-mono">
            <span className="hidden sm:inline text-muted-foreground mx-2">|</span>
            <a href="#home" className="text-primary hover:underline underline-offset-2">
              Home
            </a>
            <span className="text-muted-foreground mx-2">|</span>
            <a href="#about" className="text-primary hover:underline underline-offset-2">
              About
            </a>
          </nav>
        </div>

        {/* Tagline */}
        <p className="text-lg text-foreground mb-6 font-serif">
          Aspiring Web Developer & Science Enthusiast
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3 text-muted-foreground font-serif">
          <span>Find me on</span>
          <div className="flex items-center gap-2">
            <a
              href="http://github.com/towfikahmed0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <span>,</span>
            <a
              href="http://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span>,</span>
            <a
              href="http://facebook.com/towfikahmed07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <span>,</span>
            <a
              href="https://www.instagram.com/towfikahmed07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <span>, and</span>
            <a
              href="mailto:towfikahmed2477@gmail.com"
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <span>.</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
