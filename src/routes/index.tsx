import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useAuth } from "@/hooks/useAuth";
import { Video, Calendar, Users, Hand, Languages, Mic, Sparkles, ShieldCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const ctaPath = user ? "/dashboard" : "/signup";

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="container-page pt-10 pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
                <Sparkles size={14} className="text-accent" />
                AI-powered accessible video meetings
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Breaking <span className="text-gradient animate-gradient">Communication</span><br />
                Barriers with AI
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
                Real-time sign-to-voice, voice-to-sign, and gesture recognition built into
                a futuristic video conferencing experience. Inclusive by design.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to={ctaPath}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-all hover:scale-[1.02]"
                >
                  <Video size={16} /> Start Meeting
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  to={ctaPath}
                  className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 text-sm font-medium hover:glow-soft"
                >
                  <Users size={16} /> Join Meeting
                </Link>
                <Link
                  to={ctaPath}
                  className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 text-sm font-medium hover:glow-soft"
                >
                  <Calendar size={16} /> Schedule
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Animated meeting preview */}
          <Reveal delay={400}>
            <div className="relative mx-auto mt-20 max-w-5xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl glass-strong p-3 shadow-elevated">
                <div className="flex items-center gap-2 px-2 pb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-muted-foreground">s2v.connect / room — live</span>
                </div>
                <div className="grid gap-3 rounded-2xl bg-black/30 p-3 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    { name: "You", color: "from-violet-500/40 to-blue-500/40", initials: "Y" },
                    { name: "Aarav", color: "from-pink-500/40 to-purple-500/40", initials: "A" },
                    { name: "Priya", color: "from-cyan-500/40 to-blue-500/40", initials: "P" },
                    { name: "Mohan", color: "from-emerald-500/40 to-cyan-500/40", initials: "M" },
                    { name: "Lakshmi", color: "from-fuchsia-500/40 to-pink-500/40", initials: "L" },
                    { name: "Rahul", color: "from-amber-500/40 to-orange-500/40", initials: "R" },
                  ].map((p, i) => (
                    <div key={p.name} className="group relative aspect-video overflow-hidden rounded-xl border border-white/5">
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 text-2xl font-semibold backdrop-blur-md animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                          {p.initials}
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-[11px] backdrop-blur">{p.name}</div>
                      {i === 0 && (
                        <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300 backdrop-blur">
                          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-400" />
                          Sign → Voice
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-black/40 p-2">
                  {[Mic, Video, Hand, Languages, Users].map((Icon, i) => (
                    <button key={i} className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass hover:glow-soft">
                      <Icon size={16} />
                    </button>
                  ))}
                  <button className="ml-2 inline-flex items-center gap-2 rounded-xl bg-red-500/90 px-4 py-2 text-xs font-semibold text-white">
                    End
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative scroll-mt-24">
        <div className="container-page py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-widest text-accent">Accessibility features</span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Built for every voice</h2>
              <p className="mt-4 text-muted-foreground">Four pillars that make S2V Connect inclusive by default.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Hand, title: "Sign to Voice", desc: "Real-time gesture recognition transforms sign language into spoken voice." },
              { icon: Mic, title: "Voice to Sign", desc: "Spoken words become an animated avatar performing sign in real time." },
              { icon: Languages, title: "Real-Time Translation", desc: "Live captions in 7+ Indian and global languages." },
              { icon: Sparkles, title: "AI Gesture Recognition", desc: "MediaPipe-powered hand tracking with contextual NLP." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <div className="group relative h-full rounded-3xl glass p-6 transition-all hover:glow-soft hover:-translate-y-1">
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-brand opacity-0 blur-xl transition group-hover:opacity-20" />
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand">
                    <f.icon size={20} className="text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Bar */}
      <section id="about" className="scroll-mt-24">
        <div className="container-page py-20">
          <Reveal>
            <div className="rounded-3xl glass-strong p-10 md:p-16">
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div>
                  <span className="text-xs uppercase tracking-widest text-accent">Why S2V Connect</span>
                  <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                    A meeting platform where <span className="text-gradient">no one is left out</span>
                  </h3>
                  <p className="mt-4 text-muted-foreground">
                    From AI noise cancellation to emotion-aware subtitles, every feature exists
                    to make conversation accessible — for the deaf, the blind, and the hearing.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: ShieldCheck, label: "End-to-end encrypted" },
                      { icon: Globe, label: "7+ languages" },
                      { icon: Sparkles, label: "AI captions & translation" },
                      { icon: Hand, label: "Gesture recognition" },
                    ].map((b) => (
                      <div key={b.label} className="flex items-center gap-2 text-sm">
                        <b.icon size={16} className="text-accent" />
                        {b.label}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate({ to: ctaPath })}
                    className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground glow"
                  >
                    Try it free
                  </button>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-brand p-[2px] animate-spin-slow opacity-60">
                    <div className="h-full w-full rounded-3xl bg-background" />
                  </div>
                  <div className="absolute inset-6 rounded-2xl glass-strong p-6">
                    <div className="space-y-3">
                      {["Hello — pleased to meet you", "नमस्ते — आपसे मिलकर खुशी हुई", "வணக்கம் — உங்களை சந்தித்ததில் மகிழ்ச்சி"].map((t, i) => (
                        <div key={t} className="rounded-xl glass p-3 text-sm" style={{ animationDelay: `${i * 0.4}s` }}>
                          {t}
                        </div>
                      ))}
                      <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-xs text-emerald-300">
                        <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400" />
                        Live AI captions enabled
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
