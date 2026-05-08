import { useEffect, useState } from "react";

export function Splash() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("s2v_splash_seen")) {
      setShow(false);
      return;
    }
    const t1 = setTimeout(() => setFade(true), 1600);
    const t2 = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("s2v_splash_seen", "1");
    }, 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1020] transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden
    >
      {/* Glowing particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: `${4 + (i % 5)}px`,
              height: `${4 + (i % 5)}px`,
              background: i % 2 ? "#8B7CFF" : "#5EEAD4",
              filter: "blur(2px)",
              opacity: 0.6,
              animation: `float ${4 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center animate-fade-up">
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-brand blur-2xl opacity-70 animate-pulse-glow" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-brand shadow-[0_0_60px_-10px_rgba(109,94,245,0.8)]">
            <span className="font-display text-3xl font-bold text-white">S2V</span>
          </div>
        </div>
        <h1 className="mt-8 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          S<span className="text-gradient">2</span>V
        </h1>
        <p className="mt-2 text-sm text-[#B6BEDC]">Smart Sign Communication Platform</p>
        <div className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-[shimmer_1.6s_ease-in-out_infinite] bg-gradient-brand" />
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
