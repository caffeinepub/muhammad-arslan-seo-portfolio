import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
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
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.15 190 / 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.73 0.17 225 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div
        ref={ref}
        className="fade-in max-w-[1200px] mx-auto px-4 sm:px-6 py-20 w-full"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[oklch(0.82_0.15_190/0.4)] bg-[oklch(0.82_0.15_190/0.08)] text-neon-cyan text-xs font-semibold uppercase tracking-widest">
              <span
                className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"
                style={{ backgroundColor: "oklch(0.82 0.15 190)" }}
              />
              Certified SEO Specialist – DigiSkills
            </div>

            <h1
              className="font-heading font-extrabold text-heading leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Your Local Business,{" "}
              <span className="text-neon-cyan">at the Top of Google</span>
            </h1>

            <p
              className="text-lg font-semibold"
              style={{ color: "oklch(0.83 0.18 155)" }}
            >
              More Traffic. More Calls. More Revenue.
            </p>

            <p className="text-base leading-relaxed text-body">
              I help local businesses dominate search rankings with proven SEO
              strategies backed by data. If your competitors are showing up
              before you, that changes today. I turn your online visibility into
              real customers and measurable growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:arslanwebify@gmail.com?subject=Free%20SEO%20Audit%20Request&body=Hi%20Arslan%2C%0A%0AI%27d%20like%20to%20book%20a%20free%20SEO%20audit%20for%20my%20business.%0A%0AWebsite%3A%20%0ABusiness%20Name%3A%20%0ALocation%3A%20"
                data-ocid="hero.primary_button"
                className="btn-neon px-7 py-3 text-base inline-block"
              >
                📋 Get Your Free SEO Audit
              </a>
              <a
                href="#services"
                data-ocid="hero.secondary_button"
                className="btn-neon-outline px-7 py-3 text-base inline-block"
              >
                View Services
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { label: "Clients Served", value: "50+" },
                { label: "Keywords Ranked", value: "200+" },
                { label: "Satisfaction", value: "98%" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading font-bold text-2xl text-neon-cyan">
                    {s.value}
                  </div>
                  <div className="text-xs text-body">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile Photo Card */}
          <div className="relative flex justify-center">
            <div
              className="relative w-72 h-80 rounded-2xl border border-[oklch(0.82_0.15_190/0.5)] glow-cyan overflow-hidden"
              style={{ background: "oklch(0.13 0.025 250)" }}
            >
              {imgError ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-heading font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.82 0.15 190), oklch(0.73 0.17 225))",
                      color: "oklch(0.08 0.02 250)",
                    }}
                  >
                    MA
                  </div>
                </div>
              ) : (
                <img
                  src="/assets/uploads/1761192194022-019d23cd-8887-7268-b0c1-b1002fc84dfd-1.jpg"
                  alt="Muhammad Arslan - Local SEO Specialist"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              )}

              {/* Gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.08 0.02 250), transparent)",
                }}
              />
            </div>

            {/* Floating overlay cards */}
            <div
              className="absolute -top-4 -left-4 px-3 py-2 rounded-xl border border-[oklch(0.82_0.15_190/0.5)] animate-float"
              style={{
                background: "oklch(0.13 0.025 250)",
                animationDelay: "0s",
              }}
            >
              <div className="text-xs text-body">Website Traffic</div>
              <div className="font-heading font-bold text-neon-green">
                +390%
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl border border-[oklch(0.82_0.15_190/0.5)] animate-float"
              style={{
                background: "oklch(0.13 0.025 250)",
                animationDelay: "1.5s",
              }}
            >
              <div className="text-xs text-body">Client Rating</div>
              <div className="font-heading font-bold text-neon-cyan">
                ⭐ 4.9
              </div>
            </div>

            <div
              className="absolute top-1/3 -right-8 px-3 py-2 rounded-xl border border-[oklch(0.82_0.15_190/0.5)] animate-float"
              style={{
                background: "oklch(0.13 0.025 250)",
                animationDelay: "0.75s",
              }}
            >
              <div className="text-xs text-body">#1 Ranked</div>
              <div
                className="font-heading font-bold"
                style={{ color: "oklch(0.83 0.18 155)" }}
              >
                Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-body hover:text-neon-cyan transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
