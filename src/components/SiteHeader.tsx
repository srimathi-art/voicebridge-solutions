import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const links = [
  { to: "/", label: "Home" },
  { to: "/#features", label: "Features", hash: true },
  { to: "/#about", label: "About" , hash: true },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container-page">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-brand glow" />
            <span className="font-display text-base font-semibold tracking-tight">
              S2V <span className="text-gradient">Connect</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-all hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="rounded-xl px-4 py-2 text-sm font-medium glass hover:glow-soft"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <LogOut size={14} /> Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-xl px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_oklch(0.7_0.25_285_/_0.7)]"
                >
                  Get started
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </>
            )}
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
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 border-t border-white/5 pt-2">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm">Dashboard</Link>
                  <button onClick={handleLogout} className="block w-full text-left rounded-lg px-3 py-2.5 text-sm">Sign out</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm">Sign in</Link>
                  <Link to="/signup" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gradient">Get started</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
