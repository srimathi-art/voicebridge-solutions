import { T as jsxRuntimeExports } from "./worker-entry-VLVgEDWl.js";
import { c as createLucideIcon, L as Link } from "./router-Dwp7lmB9.js";
import { R as Reveal } from "./Reveal-_CWLun8-.js";
import { A as ArrowLeft } from "./arrow-left-BiyHm3vw.js";
import { M as Mic, H as Hand } from "./mic-CuqoUFnS.js";
import { U as Users } from "./users-DMUPWqQe.js";
import { A as ArrowRight } from "./arrow-right-DCW0ez1h.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
];
const Captions = createLucideIcon("captions", __iconNode);
const features = [{
  icon: Mic,
  title: "Speech → Text",
  desc: "Teacher's voice transcribed live for every student."
}, {
  icon: Hand,
  title: "Sign → Voice",
  desc: "Deaf students participate by signing — heard by all."
}, {
  icon: Captions,
  title: "Real-time captions",
  desc: "Synchronized captions overlay the entire lecture."
}, {
  icon: Users,
  title: "Accessible education",
  desc: "Built for classrooms, lecture halls, and workshops."
}];
function LectureMode() {
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
            " Mode 03 · Lecture"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl", children: "Lecture Mode" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-2xl text-gradient", children: '"Inclusive Learning for Everyone."' }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-lg text-muted-foreground", children: "Lecture Mode supports classrooms by converting teacher speech into text and student signs into voice. No student is left out of the conversation — knowledge flows freely, in every direction." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-[480px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-pulse-glow rounded-full bg-gradient-brand opacity-25 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] glass-strong p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 12, className: "text-primary-foreground" }) }),
                "Teacher · speaking"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-sm", children: `"Today we'll explore neural networks and how they learn from data."` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-accent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 animate-pulse rounded-full bg-accent" }),
              "Live captions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { size: 12, className: "text-primary-foreground" }) }),
                "Student · signing"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-sm", children: '"Can you explain backpropagation again?"' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between rounded-xl bg-accent/10 px-3 py-2 text-xs text-accent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "32 students · all included" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14 })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Key features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl font-semibold md:text-4xl", children: [
          "Education that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "includes everyone." })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Continue exploring" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-2xl font-semibold", children: "Get in touch with the S2V team." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground glow transition-all hover:translate-x-1", children: [
        "Contact us ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] })
    ] }) }) })
  ] });
}
export {
  LectureMode as component
};
