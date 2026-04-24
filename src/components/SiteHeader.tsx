import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/product", label: "Product" },
  { to: "/technology", label: "Technology" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-page">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand glow animate-gradient">
              <span className="text-sm font-bold text-primary-foreground">S</span>
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              S2V
              <span className="ml-1.5 hidden text-xs font-normal text-muted-foreground sm:inline">
                Sign to Voice
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-all hover:text-foreground"
                activeProps={{
                  className:
                    "rounded-lg px-3.5 py-2 text-sm text-foreground bg-white/5",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_oklch(0.7_0.25_285_/_0.7)]"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass-strong p-2 md:hidden animate-fade-in">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                activeProps={{
                  className:
                    "block rounded-lg px-3 py-2.5 text-sm text-foreground bg-white/10",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
