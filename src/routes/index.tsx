import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  Hand,
  Mic,
  Cpu,
  Eye,
  GraduationCap,
  Briefcase,
  Hospital,
  Users,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroOrb from "@/assets/hero-orb.jpg";
import waveform from "@/assets/waveform.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S2V — Bridging Silence and Sound" },
      {
        name: "description",
        content:
          "S2V is AI-powered assistive technology that converts sign language to voice and voice to text in real-time, empowering deaf and blind communication.",
      },
      { property: "og:title", content: "S2V — Bridging Silence and Sound" },
      {
        property: "og:description",
        content: "AI-powered communication for deaf and blind individuals.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Users,
    title: "Meet Mode",
    desc: "Real-time conversational translation between signers, speakers and listeners.",
  },
  {
    icon: GraduationCap,
    title: "Modules Mode",
    desc: "Interactive lessons to learn and practice sign language at your own pace.",
  },
  {
    icon: Briefcase,
    title: "Lecture Mode",
    desc: "Inclusive classroom experience — captions, speech and sign in one stream.",
  },
];

const tech = [
  { icon: Cpu, label: "TensorFlow", note: "AI & ML" },
  { icon: Hand, label: "MediaPipe", note: "Hand tracking" },
  { icon: Sparkles, label: "Raspberry Pi", note: "Embedded edge" },
  { icon: Mic, label: "Speech API", note: "STT & TTS" },
];

const useCases = [
  { icon: GraduationCap, title: "Education", desc: "Inclusive classrooms for every learner." },
  { icon: Users, title: "Public spaces", desc: "Conversations without barriers." },
  { icon: Briefcase, title: "Workplaces", desc: "Meetings everyone can join." },
  { icon: Hospital, title: "Healthcare", desc: "Clear communication when it matters most." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="container-page pb-32 pt-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Assistive AI · Now in development
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="text-gradient animate-gradient">Sign to Voice.</span>
                  <br />
                  <span className="text-foreground">Voice to text.</span>
                  <br />
                  <span className="text-muted-foreground">In real time.</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-7 max-w-xl text-lg text-muted-foreground">
                  S2V is an AI-powered hardware and software system that bridges
                  communication between silence and sound — empowering deaf and blind
                  individuals in every conversation.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    to="/product"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_50px_-5px_oklch(0.7_0.25_285_/_0.8)]"
                  >
                    Explore our solution
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3.5 text-sm font-medium transition-all hover:bg-white/10"
                  >
                    <Play size={14} /> Watch demo
                  </a>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/5 pt-8">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Latency</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-gradient">&lt;120ms</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Modes</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-gradient">3</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">On-device</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-gradient">AI</dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand opacity-40 blur-3xl" />
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] glass-strong glow animate-float">
                  <img
                    src={heroOrb}
                    alt="S2V neural communication visualization"
                    width={1536}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass-strong px-4 py-3 text-xs sm:block">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-accent" />
                    Translating sign · Live
                  </div>
                </div>
                <div className="absolute -right-4 top-10 hidden rounded-2xl glass-strong px-4 py-3 text-xs sm:block">
                  <div className="text-muted-foreground">Detected gesture</div>
                  <div className="mt-1 font-display text-sm">"Hello, world"</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="relative">
        <div className="container-page">
          <Reveal className="rounded-3xl glass-strong p-10 md:p-14">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="md:col-span-1">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">About S2V</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  A student-driven startup, building for the next billion conversations.
                </h2>
              </div>
              <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-accent">Our mission</h3>
                  <p className="mt-2 text-muted-foreground">
                    Empower inclusivity through technology that adapts to people — not the
                    other way around.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-accent">Our vision</h3>
                  <p className="mt-2 text-muted-foreground">
                    A world without communication barriers, where every voice is heard and
                    every sign is understood.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MODES */}
      <section id="modes" className="relative mt-32">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Modes</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              One device. <span className="text-gradient">Three intelligent modes.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i * 100) as 0 | 100 | 200}>
                <article className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:glow-soft">
                  <div className="absolute inset-x-0 -top-px mx-auto h-px max-w-[60%] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand glow">
                    <f.icon size={20} className="text-primary-foreground" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={12} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY HIGHLIGHT */}
      <section className="relative mt-32">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 p-10 md:p-16">
            <div
              className="absolute inset-0 -z-10 opacity-70"
              style={{ backgroundImage: `url(${waveform})`, backgroundSize: "cover" }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/30" />

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-accent">
                  <Eye size={12} /> Built for blind users
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Accessibility,
                  <br />
                  <span className="text-gradient">at the center.</span>
                </h2>
                <p className="mt-5 max-w-lg text-muted-foreground">
                  Voice command navigation. Audio-based guidance. Haptic feedback. Every
                  interaction is engineered so that no one is left behind.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Voice-first navigation across the entire system",
                  "Audio guidance with spatial cues",
                  "Haptic feedback for silent confirmation",
                  "Screen-reader optimized interfaces",
                ].map((t, i) => (
                  <Reveal as="li" key={t} delay={(i * 100) as 0 | 100 | 200 | 300}>
                    <div className="flex items-start gap-3 rounded-2xl glass p-4">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-accent glow" />
                      <span className="text-sm text-foreground">{t}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECH GRID */}
      <section className="relative mt-32">
        <div className="container-page">
          <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Technology</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                A stack built for <span className="text-gradient">real-time intelligence.</span>
              </h2>
            </div>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              See full stack <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tech.map((t, i) => (
              <Reveal key={t.label} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="group flex h-full flex-col justify-between rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-gradient-brand">
                    <t.icon size={18} />
                  </span>
                  <div className="mt-10">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.note}</p>
                    <p className="mt-1 font-display text-lg font-semibold">{t.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="relative mt-32">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Impact</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Where S2V <span className="text-gradient">makes a difference.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]">
                  <u.icon size={20} className="text-accent" />
                  <h3 className="mt-5 font-display text-lg font-semibold">{u.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="relative mt-32">
        <div className="container-page">
          <Reveal>
            <div className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-[2rem] glass-strong glow">
              <img
                src={waveform}
                alt="Demo preview"
                width={1536}
                height={768}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <button
                type="button"
                aria-label="Play demo"
                className="group absolute inset-0 flex items-center justify-center"
              >
                <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand glow transition-transform group-hover:scale-110">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                  <Play size={28} className="ml-1 text-primary-foreground" />
                </span>
              </button>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-muted-foreground">
                <span>Product demo · 1:42</span>
                <span className="hidden sm:inline">Coming soon</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-32">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-center md:p-16">
            <div className="absolute inset-0 -z-10 opacity-50 mix-blend-overlay" style={{ backgroundImage: `url(${heroOrb})`, backgroundSize: "cover" }} />
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl">
              Communication should never be a barrier.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Partner with us, fund the mission, or join the team building the future of inclusive communication.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-background/90"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-white/10"
              >
                See the product
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
