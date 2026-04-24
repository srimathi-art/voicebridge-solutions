import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Cpu, Hand, Sparkles, Mic, Brain, Shield } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — S2V AI & Hardware Stack" },
      {
        name: "description",
        content:
          "Inside the S2V stack: TensorFlow models, MediaPipe hand tracking, Raspberry Pi edge compute, and real-time speech.",
      },
      { property: "og:title", content: "S2V Technology Stack" },
      { property: "og:description", content: "AI, hand tracking and edge compute for real-time translation." },
    ],
  }),
  component: Technology,
});

const stack = [
  {
    icon: Brain,
    label: "TensorFlow",
    note: "Deep learning models",
    desc: "Custom-trained gesture and sequence models, optimized with TF-Lite for the edge.",
  },
  {
    icon: Hand,
    label: "MediaPipe",
    note: "Hand & pose tracking",
    desc: "21-point landmark tracking at 60fps, robust under varied lighting conditions.",
  },
  {
    icon: Cpu,
    label: "Raspberry Pi",
    note: "Embedded compute",
    desc: "Compact, low-power board running the full inference pipeline locally.",
  },
  {
    icon: Mic,
    label: "Speech APIs",
    note: "STT & TTS",
    desc: "Natural text-to-speech with selectable voices, plus accurate speech recognition.",
  },
  {
    icon: Sparkles,
    label: "Edge inference",
    note: "Sub-120ms latency",
    desc: "All processing happens on-device — no cloud round-trips required.",
  },
  {
    icon: Shield,
    label: "Privacy first",
    note: "Local by default",
    desc: "Audio and video never leave the device unless the user opts in.",
  },
];

function Technology() {
  return (
    <div className="container-page py-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Technology</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
          A stack engineered for <span className="text-gradient">real-time intelligence.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every layer of S2V — from the sensors to the speech — is chosen and tuned for
          one thing: making communication feel instant, natural and private.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((s, i) => (
          <Reveal key={s.label} delay={((i % 3) * 100) as 0 | 100 | 200}>
            <article className="group h-full rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:glow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand glow transition-transform group-hover:scale-110">
                <s.icon size={20} className="text-primary-foreground" />
              </span>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">{s.note}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{s.label}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="mt-24">
        <Reveal className="rounded-[2rem] glass-strong p-10 md:p-14">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            How a single sign becomes <span className="text-gradient">spoken word.</span>
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Capture", d: "Wearable sensors + camera record motion." },
              { n: "02", t: "Track", d: "MediaPipe extracts 21 landmarks per hand." },
              { n: "03", t: "Infer", d: "TF-Lite model classifies gesture + intent." },
              { n: "04", t: "Speak", d: "TTS engine outputs natural voice." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={(i * 100) as 0 | 100 | 200 | 300}>
                <li className="rounded-2xl glass p-5">
                  <div className="font-display text-sm text-accent">{step.n}</div>
                  <div className="mt-2 font-display text-lg font-semibold">{step.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </section>
    </div>
  );
}
