import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Video, Copy, Calendar, Users, Sparkles, Bell, History, Mic, Hand, Languages } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — S2V Connect" }] }),
  component: Dashboard,
});

function generateRoomId() {
  const seg = () => Math.random().toString(36).slice(2, 6);
  return `${seg()}-${seg()}-${seg()}`;
}

function Dashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [joinCode, setJoinCode] = useState("");
  const [instantId, setInstantId] = useState("");

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  const startInstant = () => {
    const id = generateRoomId();
    navigate({ to: "/room/$roomId", params: { roomId: id } });
  };

  const generateLink = () => {
    const id = generateRoomId();
    setInstantId(id);
  };

  const copyLink = () => {
    const url = `${window.location.origin}/room/${instantId}`;
    navigator.clipboard.writeText(url);
    toast.success("Meeting link copied");
  };

  const join = () => {
    if (!joinCode.trim()) return toast.error("Enter a meeting code");
    const code = joinCode.trim().replace(/.*\/room\//, "").replace(/\/$/, "");
    navigate({ to: "/room/$roomId", params: { roomId: code } });
  };

  if (loading || !user) {
    return <div className="flex min-h-[60vh] items-center justify-center text-sm text-muted-foreground">Loading…</div>;
  }

  const displayName = (user.user_metadata?.full_name as string) || user.email?.split("@")[0] || "there";

  return (
    <div className="container-page py-12">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">Dashboard</p>
          <h1 className="mt-2 font-display text-3xl font-bold md:text-4xl">Welcome, {displayName}</h1>
          <p className="mt-1 text-sm text-muted-foreground">Start, join, or schedule an inclusive meeting.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400" />
          AI accessibility online
        </div>
      </div>

      {/* Action grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Start */}
        <div className="rounded-3xl glass-strong p-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand glow">
            <Video size={20} className="text-white" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">Create Meeting</h3>
          <p className="mt-1 text-sm text-muted-foreground">Generate an instant link and invite anyone.</p>
          <div className="mt-5 space-y-3">
            <button onClick={startInstant} className="w-full rounded-xl bg-gradient-brand py-2.5 text-sm font-semibold text-primary-foreground glow">
              Start instant meeting
            </button>
            <button onClick={generateLink} className="w-full rounded-xl glass py-2.5 text-sm hover:glow-soft">
              Generate link only
            </button>
            {instantId && (
              <div className="flex items-center justify-between gap-2 rounded-xl bg-black/40 px-3 py-2 text-xs">
                <span className="truncate font-mono text-muted-foreground">/room/{instantId}</span>
                <button onClick={copyLink} className="inline-flex items-center gap-1 text-accent hover:underline">
                  <Copy size={12} /> Copy
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Join */}
        <div className="rounded-3xl glass-strong p-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand glow">
            <Users size={20} className="text-white" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">Join Meeting</h3>
          <p className="mt-1 text-sm text-muted-foreground">Enter a code or paste a meeting link.</p>
          <div className="mt-5 space-y-3">
            <input
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              placeholder="abcd-efgh-ijkl or full URL"
              className="w-full rounded-xl glass px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-ring"
            />
            <button onClick={join} className="w-full rounded-xl glass py-2.5 text-sm hover:glow-soft">
              Join
            </button>
          </div>
        </div>

        {/* Schedule */}
        <div className="rounded-3xl glass-strong p-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand glow">
            <Calendar size={20} className="text-white" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">Schedule Meeting</h3>
          <p className="mt-1 text-sm text-muted-foreground">Set a date, time, and invite participants.</p>
          <div className="mt-5 space-y-3">
            <input type="datetime-local" className="w-full rounded-xl glass px-3 py-2.5 text-sm outline-none" />
            <input placeholder="Invite emails (comma-separated)" className="w-full rounded-xl glass px-3 py-2.5 text-sm outline-none" />
            <button onClick={() => toast.success("Meeting scheduled (demo)")} className="w-full rounded-xl glass py-2.5 text-sm hover:glow-soft">
              Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Widgets */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl glass p-6 lg:col-span-2">
          <div className="flex items-center gap-2">
            <History size={16} className="text-accent" />
            <h4 className="font-semibold">Recent meetings</h4>
          </div>
          <ul className="mt-4 divide-y divide-white/5">
            {[
              { name: "Team sync", when: "Today, 10:30 AM", count: 5 },
              { name: "Accessibility review", when: "Yesterday", count: 3 },
              { name: "Onboarding — Priya", when: "2 days ago", count: 2 },
            ].map((m) => (
              <li key={m.name} className="flex items-center justify-between py-3 text-sm">
                <div>
                  <p className="font-medium">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.when} · {m.count} participants</p>
                </div>
                <button onClick={startInstant} className="rounded-lg glass px-3 py-1.5 text-xs hover:glow-soft">Rejoin</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl glass p-6">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-accent" />
            <h4 className="font-semibold">AI status</h4>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { icon: Hand, label: "Sign recognition", on: true },
              { icon: Mic, label: "Voice captions", on: true },
              { icon: Languages, label: "Live translation", on: true },
              { icon: Bell, label: "Smart notifications", on: false },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between rounded-xl glass px-3 py-2">
                <span className="flex items-center gap-2"><s.icon size={14} /> {s.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] ${s.on ? "bg-emerald-500/20 text-emerald-300" : "bg-white/5 text-muted-foreground"}`}>
                  {s.on ? "Active" : "Off"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
