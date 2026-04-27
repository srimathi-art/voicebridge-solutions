import { T as jsxRuntimeExports } from "./worker-entry-VLVgEDWl.js";
import { c as createLucideIcon, L as Link } from "./router-Dwp7lmB9.js";
import { R as Reveal } from "./Reveal-_CWLun8-.js";
import { A as ArrowLeft } from "./arrow-left-BiyHm3vw.js";
import { H as Hand, M as Mic } from "./mic-CuqoUFnS.js";
import { A as ArrowRight } from "./arrow-right-DCW0ez1h.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const features = [{
  icon: Hand,
  title: "Sign → Voice",
  desc: "Live gesture recognition speaks your signs aloud."
}, {
  icon: Mic,
  title: "Voice → Text",
  desc: "Spoken words appear instantly as readable captions."
}, {
  icon: Zap,
  title: "Instant response",
  desc: "<120ms latency keeps conversations natural."
}, {
  icon: MessageSquare,
  title: "Easy interaction",
  desc: "No setup. Two people. One device. Talk."
}];
function MeetMode() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page pt-8 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
        " Back to overview"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid items-center gap-12 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent glow" }),
            " Mode 01 · Meet"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl", children: "Meet Mode" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-2xl text-gradient", children: '"Talk Without Speaking."' }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-lg text-muted-foreground", children: "Meet Mode enables real-time communication by converting sign language into voice and speech into text, allowing seamless conversations between deaf, mute, and hearing individuals — anywhere, anytime." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto aspect-square w-full max-w-[480px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand opacity-30 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full rounded-[2rem] glass-strong p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-6 top-8 w-44 rounded-2xl glass p-4 animate-float", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { size: 14, className: "text-primary-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Signing" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-sm", children: '"Hello, how are you?"' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 w-24", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-accent/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-3 rounded-full bg-gradient-brand glow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 20, className: "text-primary-foreground" }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 right-6 w-44 rounded-2xl glass p-4 animate-float", style: {
              animationDelay: "1.5s"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 14, className: "text-primary-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Speaking" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-sm", children: `"I'm doing great, thanks!"` })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Key features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl font-semibold md:text-4xl", children: [
          "Conversations ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "without friction." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 transition-all group-hover:bg-gradient-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: f.desc })
      ] }) }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "flex flex-col items-center justify-between gap-4 rounded-3xl glass-strong p-8 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Next mode" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-2xl font-semibold", children: "Modules Mode — Learn. Practice. Improve." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/modules", className: "inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground glow transition-all hover:translate-x-1", children: [
        "Explore Modules ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] })
    ] }) }) })
  ] });
}
export {
  MeetMode as component
};
