import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Clock, Users, Video, Hand, Mic, Languages, Play } from "lucide-react";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [{ title: "Meeting History — S2V" }] }),
  component: History,
});

const meetings = [
  {
    title: "Team standup",
    when: "Today · 9:30 AM",
    duration: "32 min",
    participants: ["Ava", "Ravi", "Mei", "Leo"],
    mode: "Sign → Voice",
    icon: Hand,
    accent: "from-[#6D5EF5] to-[#8B7CFF]",
  },
  {
    title: "Accessibility design review",
    when: "Yesterday · 4:15 PM",
    duration: "1h 12m",
    participants: ["Priya", "Daniel", "Yuki"],
    mode: "Voice → Sign",
    icon: Mic,
    accent: "from-[#8B7CFF] to-[#5EEAD4]",
  },
  {
    title: "Onboarding — Aanya",
    when: "2 days ago",
    duration: "45 min",
    participants: ["Aanya", "You"],
    mode: "Sign → Sign",
    icon: Languages,
    accent: "from-[#5EEAD4] to-[#6D5EF5]",
  },
  {
    title: "Investor sync",
    when: "Last week",
    duration: "58 min",
    participants: ["Marcus", "Sofia", "You"],
    mode: "Voice + Captions",
    icon: Video,
    accent: "from-[#6D5EF5] to-[#5EEAD4]",
  },
];

function History() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  return (
    <div className="container-page py-12">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-accent">History</p>
        <h1 className="mt-2 font-display text-3xl font-bold md:text-4xl">Your meetings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Replay context, rejoin instantly, and pick up where you left off.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {meetings.map((m) => (
          <div key={m.title} className="group relative overflow-hidden rounded-3xl glass-strong p-6 transition-all hover:glow-soft">
            <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${m.accent} opacity-20 blur-3xl transition-opacity group-hover:opacity-40`} />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand glow">
                  <m.icon size={18} className="text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock size={12} /> {m.when}</span>
                  <span>·</span>
                  <span>{m.duration}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">{m.mode}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-brand px-3 py-2 text-xs font-semibold text-primary-foreground glow">
                <Play size={12} /> Join again
              </button>
            </div>

            <div className="relative mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
              <Users size={14} className="text-muted-foreground" />
              <div className="flex -space-x-2">
                {m.participants.map((p, i) => (
                  <div
                    key={p}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1E1B4B] bg-gradient-brand text-[10px] font-semibold text-white"
                    style={{ zIndex: 10 - i }}
                  >
                    {p.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{m.participants.join(", ")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
