import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-VLVgEDWl.js";
import { R as Reveal } from "./Reveal-_CWLun8-.js";
import { c as createLucideIcon, M as Mail } from "./router-Dwp7lmB9.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl", children: [
        "Let's build ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "inclusion together." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-lg text-muted-foreground", children: "Whether you're an investor, educator, researcher or member of the deaf and blind community — we'd love to hear from you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:sign2voice.team@gmail.com", className: "flex items-center gap-3 rounded-2xl glass p-4 hover:glow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, className: "text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "sign2voice.team@gmail.com" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit, className: "rounded-[2rem] glass-strong p-8 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", className: "mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30", placeholder: "Ada Lovelace" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", className: "mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30", placeholder: "you@company.com" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, className: "mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:bg-white/10 focus:ring-2 focus:ring-accent/30", placeholder: "Tell us about your project, school or organization…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-brand px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_50px_-5px_oklch(0.7_0.25_285_/_0.8)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" }),
        sent ? "Message sent ✓" : "Send message",
        !sent && /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14, className: "transition-transform group-hover:translate-x-0.5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "Let's build a more inclusive future together." })
    ] }) }) })
  ] }) });
}
export {
  Contact as component
};
