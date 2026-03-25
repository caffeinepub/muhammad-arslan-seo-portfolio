import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = [
        "home",
        "services",
        "case-studies",
        "about",
        "testimonials",
        "contact",
      ];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.08_0.02_250/0.95)] backdrop-blur-md border-b border-[oklch(0.22_0.04_250)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-1 text-lg font-heading font-bold"
          data-ocid="nav.link"
        >
          <span className="text-neon-cyan">M. Arslan</span>
          <span className="text-white"> | Local SEO</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className={`text-sm font-medium transition-colors duration-200 hover:text-neon-cyan ${
                activeSection === link.href.slice(1)
                  ? "text-neon-cyan"
                  : "text-[oklch(0.73_0.02_250)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="mailto:arslanwebify@gmail.com?subject=Free%20SEO%20Audit%20Request&body=Hi%20Arslan%2C%0A%0AI%27d%20like%20to%20book%20a%20free%20SEO%20audit%20for%20my%20business.%0A%0AWebsite%3A%20%0ABusiness%20Name%3A%20%0ALocation%3A%20"
            data-ocid="nav.primary_button"
            className="btn-neon px-5 py-2 text-sm inline-block"
          >
            Get A Free Audit
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.1_0.02_250/0.98)] backdrop-blur-md border-t border-[oklch(0.22_0.04_250)] px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-[oklch(0.73_0.02_250)] hover:text-neon-cyan font-medium py-1 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:arslanwebify@gmail.com?subject=Free%20SEO%20Audit%20Request&body=Hi%20Arslan%2C%0A%0AI%27d%20like%20to%20book%20a%20free%20SEO%20audit%20for%20my%20business.%0A%0AWebsite%3A%20%0ABusiness%20Name%3A%20%0ALocation%3A%20"
              data-ocid="nav.primary_button"
              className="btn-neon px-5 py-2 text-sm text-center mt-2 inline-block"
            >
              Get A Free Audit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
