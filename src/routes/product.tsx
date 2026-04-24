import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Hand, Mic, Type, Zap } from "lucide-react";
import device from "@/assets/device-mockup.jpg";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — S2V Hardware & AI System" },
      {
        name: "description",
        content:
          "The S2V hardware system converts sign language to voice and voice to text in real time, powered by edge AI.",
      },
      { property: "og:title", content: "S2V Product" },
      { property: "og:description", content: "Hardware + AI for real-time, inclusive communication." },
      { property: "og:image", content: device },
    ],
  }),
  component: Product,
});

const flow = [
  { icon: Hand, title: "Sign", desc: "Wearable sensors capture gestures with sub-millimeter precision." },
  { icon: Zap, title: "Translate", desc: "On-device AI converts movement into language in <120ms." },
  { icon: Mic, title: "Voice", desc: "Natural speech is generated, with selectable tone and language." },
  { icon: Type, title: "Text", desc: "Spoken responses are transcribed instantly for the signer." },
];

function Product() {
  return (
    <div className="container-page py-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Product</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
          The S2V system. <span className="text-gradient">Hardware that listens.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A wearable, an embedded AI core, and an interface designed for everyone. S2V
          translates sign language to voice, voice to text — instantly, privately, on the
          edge.
        </p>
      </Reveal>

      <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong glow">
            <img
              src={device}
              alt="S2V wearable device prototype"
              width={1280}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ul className="space-y-4">
            {flow.map((f) => (
              <li
                key={f.title}
                className="flex gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:glow-soft"
              >
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-brand glow">
                  <f.icon size={18} className="text-primary-foreground" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <section className="mt-24 grid gap-6 md:grid-cols-3">
        {[
          { k: "<120ms", v: "End-to-end latency" },
          { k: "On-device", v: "Privacy by design" },
          { k: "3 modes", v: "Meet · Modules · Lecture" },
        ].map((s, i) => (
          <Reveal key={s.v} delay={(i * 100) as 0 | 100 | 200}>
            <div className="rounded-2xl glass p-8 text-center">
              <div className="font-display text-4xl font-semibold text-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal className="mt-24 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] glass-strong p-10">
        <div>
          <h2 className="font-display text-3xl font-semibold">Want to see it work?</h2>
          <p className="mt-2 text-muted-foreground">Reach out for a live demonstration or pilot program.</p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow"
        >
          Request a demo <ArrowRight size={16} />
        </Link>
      </Reveal>
    </div>
  );
}
