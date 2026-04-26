import { useEffect, useState } from "react";
import s2v from "@/assets/S2V.png";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-5">

        <div className="relative h-16 w-16">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border border-white/10" />

          {/* Rotating border */}
          <div className="absolute inset-0 animate-spin-slow rounded-full border-t-2 border-r-2 border-accent" />

          {/* 🔥 LOGO inside */}
          <div className="absolute inset-2 flex items-center justify-center rounded-full">
  <img
    src={s2v}
    alt="S2V Logo"
    className="h-10 w-10 object-contain"
  />
</div>
        </div>

        <p className="font-display text-sm tracking-[0.3em] text-muted-foreground">
          S2V
        </p>

      </div>
    </div>
  );
}