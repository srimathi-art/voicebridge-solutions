import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-VLVgEDWl.js";
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const delayClass = delay ? `delay-${delay}` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref,
      className: `reveal ${delayClass} ${className}`.trim(),
      children
    }
  );
}
export {
  Reveal as R
};
