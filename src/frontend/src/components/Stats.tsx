import { useEffect, useRef } from "react";

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "200+", label: "Keywords Ranked" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="py-10 border-y border-[oklch(0.22_0.04_250)]"
      style={{ background: "oklch(0.11 0.02 250)" }}
    >
      <div ref={ref} className="fade-in max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1">
              <div className="font-heading font-extrabold text-4xl text-neon-cyan">
                {s.value}
              </div>
              <div className="text-body text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
