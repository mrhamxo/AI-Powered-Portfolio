import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { developerInfo } from "@/data/portfolioData";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-display text-xl font-bold gradient-text">
            MH
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> by {developerInfo.name} © {new Date().getFullYear()}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${developerInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
