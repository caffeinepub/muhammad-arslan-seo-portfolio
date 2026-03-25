import { useEffect, useRef } from "react";

export default function CTASection() {
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
    <section className="py-20">
      <div ref={ref} className="fade-in max-w-[1200px] mx-auto px-4 sm:px-6">
        <div
          className="rounded-2xl p-12 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.11 0.03 220), oklch(0.13 0.04 200))",
            border: "1px solid oklch(0.82 0.15 190 / 0.3)",
            boxShadow: "0 0 60px oklch(0.82 0.15 190 / 0.15)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.82 0.15 190 / 0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <h2 className="font-heading font-extrabold text-heading text-3xl md:text-4xl mb-4">
              Ready to{" "}
              <span className="text-neon-cyan">Rank #1 on Google?</span>
            </h2>
            <p className="text-body text-base mb-8 max-w-lg mx-auto">
              Get your FREE SEO audit today and discover how I can grow your
              business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/923401477947"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="cta.primary_button"
                className="btn-neon px-7 py-3 text-base inline-block"
              >
                📋 Book Free Audit on WhatsApp
              </a>
              <a
                href="mailto:arslanwebify@gmail.com"
                data-ocid="cta.secondary_button"
                className="btn-neon-outline px-7 py-3 text-base inline-block"
              >
                ✉️ Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
