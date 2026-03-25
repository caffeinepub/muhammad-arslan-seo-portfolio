import { Award } from "lucide-react";
import { useEffect, useRef } from "react";

const caseStudies = [
  {
    type: "Restaurant",
    location: "New York",
    problem: "Buried on page 3 of Google. Getting zero calls from search.",
    solution: "Full GMB optimization, local citation building, review campaign",
    results: [
      "+390% Website Traffic",
      "#1 Google Maps Ranking",
      "+220% Phone Calls",
    ],
  },
  {
    type: "Dental Clinic",
    location: "Los Angeles",
    problem: "Lost to competitors in local pack despite 10 years in business.",
    solution: "On-page SEO, citation cleanup, keyword-optimized content",
    results: [
      "+280% Local Visibility",
      "Top 3 Local Pack",
      "+150% Appointments",
    ],
  },
  {
    type: "Plumbing Company",
    location: "Chicago",
    problem: "No online presence. Relied entirely on word-of-mouth.",
    solution:
      "Built GMB from scratch, created local citations, built backlinks",
    results: ["+500% Organic Traffic", "Page 1 for 15 Keywords", "+300% Leads"],
  },
  {
    type: "Law Firm",
    location: "Houston",
    problem: "Low trust signals and poor Google rating affecting inquiries.",
    solution: "Reputation management, review generation, GMB posts strategy",
    results: [
      "+120% Reviews",
      "4.8★ Average Rating",
      "+85% Consultation Requests",
    ],
  },
  {
    type: "Retail Store",
    location: "Miami",
    problem: "Foot traffic declining. Customers couldn't find them online.",
    solution: "Local SEO audit, GMB optimization, local backlink campaign",
    results: [
      "+350% Map Views",
      "+180% Direction Requests",
      "+95% In-Store Visits",
    ],
  },
];

export default function CaseStudies() {
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
      id="case-studies"
      className="py-20 section-glow"
      style={{ background: "oklch(0.09 0.02 250)" }}
    >
      <div ref={ref} className="fade-in max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-[oklch(0.82_0.15_190/0.4)] bg-[oklch(0.82_0.15_190/0.08)] text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            Success Stories
          </div>
          <h2 className="font-heading font-bold text-heading text-3xl md:text-4xl mb-3">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-body text-base max-w-xl mx-auto">
            Real-world success stories from businesses I've helped grow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.type}
              data-ocid={`case_studies.item.${i + 1}`}
              className="card-hover bg-card-dark rounded-2xl border border-neon p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-heading text-base">
                    {cs.type}
                  </div>
                  <div className="text-neon-cyan text-sm">📍 {cs.location}</div>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.82 0.15 190 / 0.15)" }}
                >
                  <span className="text-neon-cyan text-xs font-bold">
                    #{i + 1}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "oklch(0.6 0.05 0)" }}
                  >
                    Problem
                  </span>
                  <p className="text-body text-sm mt-0.5">{cs.problem}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-neon-cyan">
                    Solution
                  </span>
                  <p className="text-body text-sm mt-0.5">{cs.solution}</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[oklch(0.22_0.04_250)]">
                <div className="text-xs uppercase tracking-widest text-neon-cyan mb-2">
                  Results
                </div>
                {cs.results.map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <span style={{ color: "oklch(0.83 0.18 155)" }}>▲</span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.83 0.18 155)" }}
                    >
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification */}
        <div
          className="mt-16 rounded-2xl border border-[oklch(0.82_0.15_190/0.4)] p-8 text-center glow-cyan"
          style={{ background: "oklch(0.13 0.025 250)" }}
        >
          <Award
            className="mx-auto mb-4 text-neon-cyan"
            size={40}
            style={{ color: "oklch(0.82 0.15 190)" }}
          />
          <div className="text-xs uppercase tracking-widest text-neon-cyan mb-2">
            Certified & Qualified
          </div>
          <h3 className="font-heading font-bold text-heading text-2xl mb-2">
            DigiSkills SEO Certificate
          </h3>
          <p className="text-body text-sm max-w-md mx-auto mb-6">
            DigiSkills Certified SEO Specialist | BS Computer Science Student |
            50+ Successful Projects
          </p>
          <a
            href="https://pdflink.to/589d309a/"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cert.primary_button"
            className="btn-neon px-7 py-3 text-sm inline-block"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}
