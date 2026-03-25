import { useEffect, useRef, useState } from "react";

const skills = [
  "Google My Business Expert",
  "DigiSkills Certified SEO Specialist",
  "BS Computer Science (In Progress)",
  "50+ Successful Client Projects",
  "Local & International Clients",
  "Results-Driven & Data-Backed",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

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
    <section id="about" className="py-20 section-glow">
      <div ref={ref} className="fade-in max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-[oklch(0.82_0.15_190/0.4)] bg-[oklch(0.82_0.15_190/0.08)] text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            About Me
          </div>
          <h2 className="font-heading font-bold text-heading text-3xl md:text-4xl mb-2">
            About Muhammad Arslan
          </h2>
          <p className="text-neon-cyan text-base font-medium">
            Your Partner in Local Search Dominance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
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
                  alt="Muhammad Arslan"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              )}
              {/* Decorative corner tag */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-center"
                style={{ background: "oklch(0.08 0.02 250 / 0.9)" }}
              >
                <div className="text-neon-cyan font-semibold text-sm">
                  Muhammad Arslan
                </div>
                <div className="text-body text-xs">Local SEO Specialist</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <p className="text-body text-base leading-relaxed">
              Hi, I'm Arslan, a Local SEO Specialist with a passion for helping
              businesses grow online. Currently pursuing BS Computer Science,
              certified in SEO from DigiSkills, and focused on driving real
              results for clients worldwide.
            </p>
            <p className="text-body text-base leading-relaxed">
              I specialize in helping small and medium-sized businesses dominate
              local search results. My data-driven approach combines technical
              SEO expertise with creative content strategies to deliver
              measurable growth.
            </p>

            <div className="space-y-2">
              <h3 className="font-heading font-semibold text-heading text-base mb-3">
                Skills & Highlights
              </h3>
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span
                    style={{ color: "oklch(0.83 0.18 155)" }}
                    className="flex-shrink-0"
                  >
                    ✅
                  </span>
                  <span className="text-body text-sm">{skill}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/923401477947"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="about.primary_button"
              className="btn-neon px-7 py-3 text-base inline-block mt-2"
            >
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
