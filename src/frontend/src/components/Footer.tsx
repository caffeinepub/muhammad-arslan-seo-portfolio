import { SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      className="border-t border-[oklch(0.22_0.04_250)] py-12"
      style={{ background: "oklch(0.07 0.015 250)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-heading font-bold text-xl">
              <span className="text-neon-cyan">M. Arslan</span>
              <span className="text-heading"> | Local SEO</span>
            </div>
            <p className="text-body text-sm leading-relaxed max-w-xs">
              Local SEO Specialist helping businesses rank #1 worldwide.
              Data-driven strategies, real results.
            </p>
            <div className="flex gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/muhammad-arslan-7593a838b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:-translate-y-1 transition-transform"
                style={{
                  background: "oklch(0.82 0.15 190 / 0.1)",
                  border: "1px solid oklch(0.82 0.15 190 / 0.3)",
                  color: "oklch(0.82 0.15 190)",
                }}
              >
                <SiLinkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/x9_arslan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:-translate-y-1 transition-transform"
                style={{
                  background: "oklch(0.82 0.15 190 / 0.1)",
                  border: "1px solid oklch(0.82 0.15 190 / 0.3)",
                  color: "oklch(0.82 0.15 190)",
                }}
              >
                <SiInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-heading text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-body text-sm hover:text-neon-cyan transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-heading text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:arslanwebify@gmail.com"
                className="block text-body text-sm hover:text-neon-cyan transition-colors"
              >
                arslanwebify@gmail.com
              </a>
              <a
                href="https://wa.me/923401477947"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-body text-sm hover:text-neon-cyan transition-colors"
              >
                +923401477947
              </a>
              <div className="text-body text-sm">🌍 Worldwide</div>
            </div>
          </div>
        </div>

        <div className="border-t border-[oklch(0.22_0.04_250)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-body text-xs">
            © {year} Muhammad Arslan. All rights reserved.
          </p>
          <p className="text-body text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
