import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-white/5 pt-16 pb-10">
      <div className="pointer-events-none absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand glow">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </span>
              <span className="font-display text-base font-semibold">S2V</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Bridging communication between silence and sound. AI-powered assistive
              technology for the deaf and blind community.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass transition-all hover:glow-soft hover:text-accent"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass transition-all hover:glow-soft hover:text-accent"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:hello@s2v.ai"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass transition-all hover:glow-soft hover:text-accent"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/product" className="text-muted-foreground hover:text-foreground">Product</Link></li>
              <li><Link to="/technology" className="text-muted-foreground hover:text-foreground">Technology</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@s2v.ai</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} S2V — Sign to Voice Solutions. All rights reserved.</p>
          <p className="opacity-70">Designed for inclusion.</p>
        </div>
      </div>
    </footer>
  );
}
