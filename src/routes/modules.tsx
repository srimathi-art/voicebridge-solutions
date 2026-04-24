import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Target, Sparkles, GraduationCap, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Modules Mode — Learn. Practice. Improve. | S2V" },
      {
        name: "description",
        content:
          "Modules Mode helps users learn and practice sign language with guided feedback, accuracy scoring, and beginner-friendly word sets.",
      },
      { property: "og:title", content: "Modules Mode — S2V" },
      { property: "og:description", content: "Learn sign language with guided feedback and practice modules." },
    ],
  }),
  component: ModulesMode,
});

const features = [
  { icon: BookOpen, title: "Practice sign words", desc: "Curated word libraries to build vocabulary." },
  { icon: Target, title: "Accuracy feedback", desc: "Real-time scoring on every gesture you sign." },
  { icon: Sparkles, title: "Beginner-friendly", desc: "Start from basics with visual hints and examples." },
  { icon: GraduationCap, title: "Training modules", desc: "Progressive lessons that adapt to your pace." },
];

const sampleWords = ["Hello", "Thank you", "Yes", "Please", "Friend", "Help"];

function ModulesMode() {
  return (
    <>
      <section className="relative">
        <div className="container-page pt-8 pb-20">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft size={14} /> Back to overview
            </Link>
          </Reveal>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent glow" /> Mode 02 · Modules
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  Modules Mode
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 font-display text-2xl text-gradient">"Learn. Practice. Improve."</p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-5 max-w-lg text-muted-foreground">
                  Modules Mode helps users learn and practice sign language with guided feedback
                  and predefined word sets. Build muscle memory, track progress, and gain
                  confidence — one sign at a time.
                </p>
              </Reveal>
            </div>

            {/* Learning visual */}
            <Reveal delay={200}>
              <div className="relative mx-auto w-full max-w-[480px]">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand opacity-25 blur-3xl" />
                <div className="relative rounded-[2rem] glass-strong p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Lesson · Greetings</span>
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-accent">Beginner</span>
                  </div>
                  <div className="mt-5 rounded-2xl bg-gradient-brand p-6 text-center glow">
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/80">Sign this word</p>
                    <p className="mt-2 font-display text-4xl font-semibold text-primary-foreground">Hello</p>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Accuracy</span>
                      <span className="font-display font-semibold text-gradient">94%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[94%] rounded-full bg-gradient-brand glow" />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {sampleWords.map((w, i) => (
                      <div
                        key={w}
                        className={`rounded-xl px-3 py-2 text-center text-xs ${
                          i < 3 ? "bg-accent/15 text-accent" : "glass text-muted-foreground"
                        }`}
                      >
                        {i < 3 && <Check size={10} className="mr-1 inline" />}
                        {w}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container-page">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Key features</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Built to <span className="text-gradient">teach.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="group h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 transition-all group-hover:bg-gradient-brand">
                    <f.icon size={18} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-24">
        <div className="container-page">
          <Reveal className="flex flex-col items-center justify-between gap-4 rounded-3xl glass-strong p-8 md:flex-row">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Next mode</p>
              <p className="mt-1 font-display text-2xl font-semibold">Lecture Mode — Inclusive learning for everyone.</p>
            </div>
            <Link to="/lecture" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground glow transition-all hover:translate-x-1">
              Explore Lecture <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
