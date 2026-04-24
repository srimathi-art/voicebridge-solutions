import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Heart, Lightbulb, Globe, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About S2V — Built by students, for inclusion" },
      {
        name: "description",
        content:
          "Meet S2V — a student-driven startup building AI assistive technology to make communication universal for the deaf and blind.",
      },
      { property: "og:title", content: "About S2V" },
      { property: "og:description", content: "Built by students, for universal communication." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Empathy first", desc: "We build with the community, not just for it." },
  { icon: Lightbulb, title: "Quiet innovation", desc: "Hardware, AI and care — composed elegantly." },
  { icon: Globe, title: "Universal by design", desc: "Accessibility is the product, not a feature." },
  { icon: Users, title: "Open collaboration", desc: "We share, learn and grow with researchers and educators." },
];

function About() {
  return (
    <div className="container-page py-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">About</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
          A small team. A <span className="text-gradient">universal mission.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          S2V was born inside a university lab, where a small group of student engineers
          asked a simple question: what if technology could finally listen the way humans
          do — through hands, through voice, through silence.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-10 md:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl glass p-8">
            <h2 className="font-display text-2xl font-semibold">Mission</h2>
            <p className="mt-3 text-muted-foreground">
              Empower inclusivity using technology — bridging the deaf, blind and hearing
              worlds through real-time, AI-powered translation that anyone can use.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-3xl glass-strong p-8 glow-soft">
            <h2 className="font-display text-2xl font-semibold">Vision</h2>
            <p className="mt-3 text-muted-foreground">
              A world without communication barriers — where every signed gesture, spoken
              word and silent moment is understood, equally and instantly.
            </p>
          </div>
        </Reveal>
      </div>

      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            What we <span className="text-gradient">stand for.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i * 100) as 0 | 100 | 200 | 300}>
              <div className="h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-soft">
                <v.icon size={20} className="text-accent" />
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <Reveal className="rounded-[2rem] glass-strong p-10 md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Story</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">From dorm room to demo day.</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-muted-foreground">
              <p>
                We started with a glove, a Raspberry Pi and an idea that wouldn't leave us
                alone. After dozens of prototypes, late-night model trainings, and feedback
                from the deaf community, S2V became a system — not a gadget.
              </p>
              <p>
                Today we're building the production-ready version with research labs and
                schools across India, with a clear ambition: ship hardware that disappears
                so the conversation can finally take center stage.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
