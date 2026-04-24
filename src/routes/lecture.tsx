import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Mic, Captions, Hand, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/lecture")({
  head: () => ({
    meta: [
      { title: "Lecture Mode — Inclusive Learning for Everyone | S2V" },
      {
        name: "description",
        content:
          "Lecture Mode supports classrooms by converting teacher speech into text and student signs into voice — accessible education in real time.",
      },
      { property: "og:title", content: "Lecture Mode — S2V" },
      { property: "og:description", content: "Inclusive classrooms with live captions and sign-to-voice." },
    ],
  }),
  component: LectureMode,
});

const features = [
  { icon: Mic, title: "Speech → Text", desc: "Teacher's voice transcribed live for every student." },
  { icon: Hand, title: "Sign → Voice", desc: "Deaf students participate by signing — heard by all." },
  { icon: Captions, title: "Real-time captions", desc: "Synchronized captions overlay the entire lecture." },
  { icon: Users, title: "Accessible education", desc: "Built for classrooms, lecture halls, and workshops." },
];

function LectureMode() {
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
                  <span className="h-1.5 w-1.5 rounded-full bg-accent glow" /> Mode 03 · Lecture
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  Lecture Mode
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 font-display text-2xl text-gradient">"Inclusive Learning for Everyone."</p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-5 max-w-lg text-muted-foreground">
                  Lecture Mode supports classrooms by converting teacher speech into text and
                  student signs into voice. No student is left out of the conversation —
                  knowledge flows freely, in every direction.
                </p>
              </Reveal>
            </div>

            {/* Classroom visual */}
            <Reveal delay={200}>
              <div className="relative mx-auto w-full max-w-[480px]">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand opacity-25 blur-3xl" />
                <div className="relative rounded-[2rem] glass-strong p-6">
                  {/* Teacher card */}
                  <div className="rounded-2xl glass p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand">
                        <Mic size={12} className="text-primary-foreground" />
                      </span>
                      Teacher · speaking
                    </div>
                    <p className="mt-3 font-display text-sm">"Today we'll explore neural networks and how they learn from data."</p>
                  </div>

                  {/* Live caption stream */}
                  <div className="my-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-accent">
                    <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
                    Live captions
                  </div>

                  {/* Student card */}
                  <div className="rounded-2xl glass p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand">
                        <Hand size={12} className="text-primary-foreground" />
                      </span>
                      Student · signing
                    </div>
                    <p className="mt-3 font-display text-sm">"Can you explain backpropagation again?"</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-accent/10 px-3 py-2 text-xs text-accent">
                    <span>32 students · all included</span>
                    <Users size={14} />
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
              Education that <span className="text-gradient">includes everyone.</span>
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
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Continue exploring</p>
              <p className="mt-1 font-display text-2xl font-semibold">Get in touch with the S2V team.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground glow transition-all hover:translate-x-1">
              Contact us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
