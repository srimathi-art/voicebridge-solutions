import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Hand, Mic, MessageSquare, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/meet")({
  head: () => ({
    meta: [
      { title: "Meet Mode — Talk Without Speaking | S2V" },
      {
        name: "description",
        content:
          "Meet Mode enables real-time communication by converting sign language into voice and speech into text — seamless conversations for everyone.",
      },
      { property: "og:title", content: "Meet Mode — S2V" },
      { property: "og:description", content: "Talk without speaking. Real-time sign-to-voice and voice-to-text." },
    ],
  }),
  component: MeetMode,
});

const features = [
  { icon: Hand, title: "Sign → Voice", desc: "Live gesture recognition speaks your signs aloud." },
  { icon: Mic, title: "Voice → Text", desc: "Spoken words appear instantly as readable captions." },
  { icon: Zap, title: "Instant response", desc: "<120ms latency keeps conversations natural." },
  { icon: MessageSquare, title: "Easy interaction", desc: "No setup. Two people. One device. Talk." },
];

function MeetMode() {
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
                  <span className="h-1.5 w-1.5 rounded-full bg-accent glow" /> Mode 01 · Meet
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  Meet Mode
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 font-display text-2xl text-gradient">"Talk Without Speaking."</p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-5 max-w-lg text-muted-foreground">
                  Meet Mode enables real-time communication by converting sign language into voice
                  and speech into text, allowing seamless conversations between deaf, mute, and
                  hearing individuals — anywhere, anytime.
                </p>
              </Reveal>
            </div>

            {/* Animated conversation visual */}
            <Reveal delay={200}>
              <div className="relative mx-auto aspect-square w-full max-w-[480px]">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand opacity-30 blur-3xl" />
                <div className="relative h-full w-full rounded-[2rem] glass-strong p-6">
                  {/* Person A — signing */}
                  <div className="absolute left-6 top-8 w-44 rounded-2xl glass p-4 animate-float">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand">
                        <Hand size={14} className="text-primary-foreground" />
                      </span>
                      <span className="text-xs text-muted-foreground">Signing</span>
                    </div>
                    <p className="mt-3 font-display text-sm">"Hello, how are you?"</p>
                  </div>

                  {/* Connecting waves */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative h-24 w-24">
                      <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                      <span className="absolute inset-3 rounded-full bg-gradient-brand glow" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Zap size={20} className="text-primary-foreground" />
                      </span>
                    </div>
                  </div>

                  {/* Person B — voice */}
                  <div className="absolute bottom-8 right-6 w-44 rounded-2xl glass p-4 animate-float" style={{ animationDelay: "1.5s" }}>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand">
                        <Mic size={14} className="text-primary-foreground" />
                      </span>
                      <span className="text-xs text-muted-foreground">Speaking</span>
                    </div>
                    <p className="mt-3 font-display text-sm">"I'm doing great, thanks!"</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative">
        <div className="container-page">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Key features</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Conversations <span className="text-gradient">without friction.</span>
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

      {/* Next mode CTA */}
      <section className="relative mt-24">
        <div className="container-page">
          <Reveal className="flex flex-col items-center justify-between gap-4 rounded-3xl glass-strong p-8 md:flex-row">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Next mode</p>
              <p className="mt-1 font-display text-2xl font-semibold">Modules Mode — Learn. Practice. Improve.</p>
            </div>
            <Link to="/modules" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground glow transition-all hover:translate-x-1">
              Explore Modules <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
