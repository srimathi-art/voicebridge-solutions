import { Fragment, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  Hand,
  Mic,
  Cpu,
  Volume2,
  Users,
  GraduationCap,
  Briefcase,
  Hospital,
  Sparkles,
  Eye,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroOrb from "@/assets/hero-orb.jpg";
import waveform from "@/assets/waveform.jpg";
import hand from "@/assets/image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S2V — Communication Without Barriers" },
      {
        name: "description",
        content:
          "S2V is an intelligent assistive device that translates sign language into voice and converts speech into text in real time.",
      },
      { property: "og:title", content: "S2V — Sign to Voice System" },
      {
        property: "og:description",
        content: "An assistive device that bridges silence and sound — in real time.",
      },
    ],
  }),
  component: Home,
});

const modes = [
  {
    to: "/meet" as const,
    badge: "Meet",
    color: "from-emerald-400/30 to-emerald-500/10",
    dot: "bg-emerald-400",
    title: "Meet Mode",
    tag: "Real-time communication",
    desc: "Talk without speaking. Sign-to-voice and voice-to-text, live.",
  },
  {
    to: "/modules" as const,
    badge: "Modules",
    color: "from-amber-400/30 to-amber-500/10",
    dot: "bg-amber-400",
    title: "Modules Mode",
    tag: "Learn and practice signs",
    desc: "Guided lessons with accuracy feedback. Build fluency, fast.",
  },
  {
    to: "/lecture" as const,
    badge: "Lecture",
    color: "from-sky-400/30 to-sky-500/10",
    dot: "bg-sky-400",
    title: "Lecture Mode",
    tag: "Accessible classroom support",
    desc: "Speech becomes captions. Signs become voice. Everyone learns.",
  },
];

const useCases = [
  { icon: GraduationCap, title: "Education", desc: "Inclusive classrooms for every learner." },
  { icon: Users, title: "Public spaces", desc: "Conversations without barriers." },
  { icon: Briefcase, title: "Workplaces", desc: "Meetings everyone can join." },
  { icon: Hospital, title: "Healthcare", desc: "Clear communication when it matters." },
];

function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
const handlePlay = async () => {
  if (videoRef.current) {
    await videoRef.current.play();
    setIsPlaying(true);
  }
};
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
                  Assistive product · The S2V System
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="text-gradient animate-gradient">S2V</span>
                  <br />
                  <span className="text-foreground">Sign to Voice</span>
                  <br />
                  <span className="text-muted-foreground">System.</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-5 max-w-xl font-display text-2xl text-foreground/90">
                  "Communication Without Barriers."
                </p>
              </Reveal>

              <Reveal delay={300}>
                <p className="mt-5 max-w-xl text-base text-muted-foreground">
                  S2V is an intelligent assistive device that translates sign language into voice
                  and converts speech into text in real time. Designed for accessibility, it
                  enables seamless interaction between deaf, mute, and blind individuals.
                </p>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#how"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_50px_-5px_oklch(0.7_0.25_285_/_0.8)]"
                  >
                    Explore how it works
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3.5 text-sm font-medium transition-all hover:bg-white/10"
                  >
                    <Play size={14} /> Watch demo
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand opacity-40 blur-3xl" />
                <div className="relative h-full w-full overflow-hidden glass-strong glow">

                  <div className="flex h-full w-max animate-[marquee_25s_linear_infinite]">

                    {/* First set */}
                    <img src={hand} className="h-full w-auto object-cover" />
                    <img src={hand} className="h-full w-auto object-cover" />
                    <img src={hand} className="h-full w-auto object-cover" />
                    <img src={hand} className="h-full w-auto object-cover" />

                    {/* Duplicate set for seamless loop */}
                    <img src={hand} className="h-full w-auto object-cover" />
                    <img src={hand} className="h-full w-auto object-cover" />
                    <img src={hand} className="h-full w-auto object-cover" />
                    <img src={hand} className="h-full w-auto object-cover" />

                  </div>

                  {/* Animation */}
                  <style>
                    {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
                  </style>

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

      {/* HOW IT WORKS */}
      <section id="how" className="relative scroll-mt-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">How it works</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Three steps. <span className="text-gradient">One conversation.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              S2V uses camera-based gesture detection, AI models, and voice processing to deliver
              real-time communication.
            </p>
          </Reveal>

          {/* Animated flow */}
          <div className="mt-14">
            <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              {[
                { icon: Hand, label: "Input", desc: "Gesture or voice", sub: "Camera + microphone" },
                { icon: Cpu, label: "AI Processing", desc: "Recognize + translate", sub: "On-device intelligence" },
                { icon: Volume2, label: "Output", desc: "Voice or text", sub: "Spoken or captioned" },
              ].map((step, i) => (
                <Fragment key={step.label}>
                  <Reveal delay={(i * 150) as 0 | 100 | 200 | 300}>
                    <div className="group relative h-full rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:glow-soft">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand glow">
                          <step.icon size={20} className="text-primary-foreground" />
                        </span>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-6 font-display text-xl font-semibold">{step.label}</h3>
                      <p className="mt-1 text-sm text-foreground/80">{step.desc}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{step.sub}</p>
                    </div>
                  </Reveal>
                  {i < 2 && (
                    <Reveal delay={((i * 150 + 100) as 0 | 100 | 200 | 300)} className="hidden md:block">
                      <div className="flex items-center justify-center">
                        <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent">
                          <span className="absolute -top-1 right-0 inline-flex h-2 w-2 animate-pulse rounded-full bg-accent glow" />
                        </div>
                      </div>
                    </Reveal>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODES OVERVIEW */}
      <section id="modes" className="relative mt-32 scroll-mt-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Modes</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Three <span className="text-gradient">smart modes.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              S2V adapts to different environments through three intelligent modes — pick one to
              explore in detail.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {modes.map((m, i) => (
              <Reveal key={m.to} delay={(i * 100) as 0 | 100 | 200}>
                <Link
                  to={m.to}
                  className="group relative block h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-2 hover:glow-soft"
                >
                  <div className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${m.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                      <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
                      {m.badge}
                    </span>
                    <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold">{m.title}</h3>
                  <p className="mt-1 text-sm text-accent">{m.tag}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
                  <div className="mt-8 inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-4 py-2 text-xs font-medium text-primary-foreground transition-all group-hover:translate-x-1 group-hover:glow">
                    Explore <ArrowRight size={12} />
                  </div>
                </Link>
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
                  <Eye size={12} /> Voice navigation
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Designed for
                  <br />
                  <span className="text-gradient">everyone.</span>
                </h2>
                <p className="mt-5 max-w-lg text-muted-foreground">
                  S2V includes voice command navigation, allowing blind users to control the
                  entire system using simple voice instructions.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  '"Open Meet Mode"',
                  '"Start Lecture Mode"',
                  '"Repeat Output"',
                  '"Switch to Modules"',
                ].map((t, i) => (
                  <Reveal as="li" key={t} delay={(i * 100) as 0 | 100 | 200 | 300}>
                    <div className="flex items-center gap-3 rounded-2xl glass p-4">
                      <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-gradient-brand glow">
                        <Mic size={14} className="text-primary-foreground" />
                      </span>
                      <span className="font-display text-sm">{t}</span>
                      {/* audio wave */}
                      <span className="ml-auto flex items-end gap-0.5">
                        {[8, 14, 20, 14, 10].map((h, k) => (
                          <span
                            key={k}
                            className="w-0.5 rounded-full bg-accent"
                            style={{
                              height: `${h}px`,
                              animation: `pulse-glow 1.${k}s ease-in-out infinite`,
                              animationDelay: `${k * 0.1}s`,
                            }}
                          />
                        ))}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPACT */}
      <section className="relative mt-32">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Impact</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Why S2V <span className="text-gradient">matters.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              S2V creates inclusive communication by breaking barriers between speech and silence.
              It empowers individuals in education, public interaction, and daily life.
            </p>
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
      <section id="demo" className="relative mt-32 scroll-mt-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Demo</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              See it <span className="text-gradient">in action.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Watch how S2V transforms communication through real-time gesture recognition and
              voice conversion.
            </p>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto mt-12 aspect-video max-w-5xl overflow-hidden rounded-[2rem] glass-strong glow">

              {/* Thumbnail Image */}
              {!isPlaying && (
                <img
                  src={waveform}
                  alt="Demo preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}

              {/* Video */}
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"
                  }`}
              >
                <source src="/demo_video.mp4" type="video/mp4" />
              </video>

              {/* Dark Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              )}

              {/* Play Button */}
              {!isPlaying && (
                <button
                  type="button"
                  aria-label="Play demo"
                  onClick={handlePlay}
                  className="group absolute inset-0 flex items-center justify-center"
                >
                  <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand glow transition-transform group-hover:scale-110">
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                    <Play size={28} className="ml-1 text-primary-foreground" />
                  </span>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-32">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-center md:p-16">
            <div className="absolute inset-0 -z-10 opacity-50 mix-blend-overlay" style={{ backgroundImage: `url(${heroOrb})`, backgroundSize: "cover" }} />
            <Sparkles className="mx-auto text-primary-foreground" size={28} />
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl">
              Communication should never be a barrier.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Partner with us, fund the mission, or join the team building the future of inclusive
              communication.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-background/90"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link
                to="/meet"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-white/10"
              >
                Explore Meet Mode
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
