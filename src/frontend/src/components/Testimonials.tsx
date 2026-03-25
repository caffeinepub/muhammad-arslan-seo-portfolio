import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Restaurant Owner, New York",
    quote:
      "Arslan completely transformed our online presence. We went from invisible to the #1 spot on Google Maps in just 3 months. Our phone calls tripled!",
    stars: 5,
    initials: "SM",
  },
  {
    name: "Dr. James Carter",
    role: "Dental Clinic, Los Angeles",
    quote:
      "Professional, knowledgeable, and delivers results. My clinic jumped to the top 3 local results. Appointments have increased significantly.",
    stars: 5,
    initials: "JC",
  },
  {
    name: "Mike Rodriguez",
    role: "Plumbing Services, Chicago",
    quote:
      "Best investment I've made for my business. Arslan built our entire online presence from zero and now we're getting consistent leads every week.",
    stars: 5,
    initials: "MR",
  },
  {
    name: "Lisa Chen",
    role: "Retail Store Owner, Miami",
    quote:
      "Highly recommend Arslan for any business needing local SEO. My foot traffic doubled in 4 months. He's responsive, professional, and gets results.",
    stars: 5,
    initials: "LC",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 section-glow"
      style={{ background: "oklch(0.09 0.02 250)" }}
    >
      <div ref={ref} className="fade-in max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-[oklch(0.82_0.15_190/0.4)] bg-[oklch(0.82_0.15_190/0.08)] text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            Client Reviews
          </div>
          <h2 className="font-heading font-bold text-heading text-3xl md:text-4xl mb-2">
            What My Clients Say
          </h2>
          <p className="text-body text-base">Don't just take my word for it</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              className="card-hover bg-card-dark rounded-2xl border border-neon p-6 space-y-4"
            >
              <div className="flex gap-0.5">
                {"★"
                  .repeat(t.stars)
                  .split("")
                  .map((star, j) => (
                    <span
                      key={`star-${t.name}-${j}`}
                      style={{ color: "oklch(0.83 0.18 155)" }}
                    >
                      {star}
                    </span>
                  ))}
              </div>

              <p className="text-body text-sm leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[oklch(0.22_0.04_250)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.82 0.15 190), oklch(0.73 0.17 225))",
                    color: "oklch(0.08 0.02 250)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-heading text-sm">
                    {t.name}
                  </div>
                  <div className="text-body text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
