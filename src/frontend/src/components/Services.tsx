import { useEffect, useRef } from "react";

const services = [
  {
    icon: "📍",
    title: "Google My Business Optimization",
    description:
      "Optimize your GMB profile to rank in Google's Local Pack and attract more local customers. I handle every detail from categories to posts.",
  },
  {
    icon: "🔗",
    title: "Citation Building",
    description:
      "Build consistent NAP citations across 50+ top directories to boost your local authority and improve search rankings.",
  },
  {
    icon: "📄",
    title: "On-Page SEO",
    description:
      "Optimize your website's content, meta tags, and structure for local keywords that your customers are actually searching for.",
  },
  {
    icon: "🌐",
    title: "Off-Page SEO & Backlinking",
    description:
      "Build high-quality backlinks from local directories, niche sites, and authority domains to boost your domain authority.",
  },
  {
    icon: "🔍",
    title: "Local Keyword Research",
    description:
      "Identify the exact keywords your local customers use to find businesses like yours and build a strategy around them.",
  },
  {
    icon: "⭐",
    title: "Review & Reputation Management",
    description:
      "Generate more 5-star reviews, respond professionally to feedback, and build a trusted online reputation that converts browsers to buyers.",
  },
];

export default function Services() {
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
    <section id="services" className="py-20 section-glow">
      <div ref={ref} className="fade-in max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-[oklch(0.82_0.15_190/0.4)] bg-[oklch(0.82_0.15_190/0.08)] text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            What I Offer
          </div>
          <h2 className="font-heading font-bold text-heading text-3xl md:text-4xl mb-3">
            My Local SEO Services
          </h2>
          <p className="text-body text-base max-w-xl mx-auto">
            Comprehensive SEO solutions that drive real results for your
            business
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              className="card-hover bg-card-dark rounded-2xl border border-neon p-6 space-y-3"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="font-heading font-semibold text-heading text-lg leading-tight">
                {service.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/923401477947"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="services.primary_button"
            className="btn-neon px-8 py-3 text-base inline-block"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
