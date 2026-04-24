import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — S2V" },
      {
        name: "description",
        content: "Get in touch with the S2V team for partnerships, demos or research collaboration.",
      },
      { property: "og:title", content: "Contact S2V" },
      { property: "og:description", content: "Let's build inclusive communication together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="container-page py-12">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            Let's build <span className="text-gradient">inclusion together.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Whether you're an investor, educator, researcher or member of the deaf and
            blind community — we'd love to hear from you.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:hello@s2v.ai" className="flex items-center gap-3 rounded-2xl glass p-4 hover:glow-soft">
              <Mail size={18} className="text-accent" />
              <span className="text-sm">hello@s2v.ai</span>
            </a>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl glass py-4 text-sm hover:glow-soft"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl glass py-4 text-sm hover:glow-soft"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] glass-strong p-8 md:p-10"
          >
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30"
                  placeholder="Ada Lovelace"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30"
                  placeholder="Tell us about your project, school or organization…"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-brand px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_50px_-5px_oklch(0.7_0.25_285_/_0.8)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                {sent ? "Message sent ✓" : "Send message"}
                {!sent && <Send size={14} className="transition-transform group-hover:translate-x-0.5" />}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We typically respond within 1–2 business days.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
