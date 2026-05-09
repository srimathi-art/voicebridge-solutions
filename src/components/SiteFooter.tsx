import { Link } from "@tanstack/react-router";
import { Mail, Github, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-white/5 pt-16 pb-10">
      <div className="pointer-events-none absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-brand glow" />
              <span className="font-display text-lg font-semibold">S2V Connect</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Breaking communication barriers with AI. Real-time sign, voice, and text
              translation for inclusive video meetings.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:hello@s2v.ai" className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass hover:text-accent">
                <Mail size={16} />
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass hover:text-accent">
                <Github size={16} />
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass hover:text-accent">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Product</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link></li>
              <li><Link to="/login" className="text-muted-foreground hover:text-foreground">Sign in</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="mailto:hello@s2v.ai" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} S2V Connect. All rights reserved.</p>
          <p>Bridging silence and sound.</p>
        </div>
      </div>
    </footer>
  );
}
