import { Mail, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { toast } from "sonner";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:arslanwebify@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client to send the message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div ref={ref} className="fade-in max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-[oklch(0.82_0.15_190/0.4)] bg-[oklch(0.82_0.15_190/0.08)] text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            Let's Connect
          </div>
          <h2 className="font-heading font-bold text-heading text-3xl md:text-4xl mb-2">
            Get In Touch
          </h2>
          <p className="text-body text-base">
            Ready to grow your local business? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-ocid="contact.dialog"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-body text-sm mb-1.5"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Your full name"
                data-ocid="contact.input"
                className="w-full px-4 py-3 rounded-xl text-heading text-sm placeholder:text-[oklch(0.4_0.02_250)] outline-none transition-all duration-200"
                style={{
                  background: "oklch(0.13 0.025 250)",
                  border: "1px solid oklch(0.22 0.04 250)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.82 0.15 190 / 0.7)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.22 0.04 250)";
                }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-body text-sm mb-1.5"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="your@email.com"
                data-ocid="contact.input"
                className="w-full px-4 py-3 rounded-xl text-heading text-sm placeholder:text-[oklch(0.4_0.02_250)] outline-none transition-all duration-200"
                style={{
                  background: "oklch(0.13 0.025 250)",
                  border: "1px solid oklch(0.22 0.04 250)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.82 0.15 190 / 0.7)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.22 0.04 250)";
                }}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-body text-sm mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                placeholder="Tell me about your business and SEO goals..."
                data-ocid="contact.textarea"
                className="w-full px-4 py-3 rounded-xl text-heading text-sm placeholder:text-[oklch(0.4_0.02_250)] outline-none transition-all duration-200 resize-none"
                style={{
                  background: "oklch(0.13 0.025 250)",
                  border: "1px solid oklch(0.22 0.04 250)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.82 0.15 190 / 0.7)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.22 0.04 250)";
                }}
              />
            </div>
            <button
              type="submit"
              data-ocid="contact.submit_button"
              className="btn-neon w-full py-3 text-base"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-6">
            <div className="bg-card-dark rounded-2xl border border-neon p-6 space-y-5">
              <h3 className="font-heading font-semibold text-heading text-lg">
                Direct Contact
              </h3>

              <a
                href="https://wa.me/923401477947"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200"
                style={{
                  background: "oklch(0.83 0.18 155 / 0.1)",
                  border: "1px solid oklch(0.83 0.18 155 / 0.3)",
                }}
              >
                <MessageCircle
                  className="flex-shrink-0"
                  size={22}
                  style={{ color: "oklch(0.83 0.18 155)" }}
                />
                <div>
                  <div className="text-heading font-semibold text-sm">
                    WhatsApp
                  </div>
                  <div className="text-body text-xs">+923401477947</div>
                </div>
              </a>

              <a
                href="mailto:arslanwebify@gmail.com"
                data-ocid="contact.secondary_button"
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200"
                style={{
                  background: "oklch(0.82 0.15 190 / 0.1)",
                  border: "1px solid oklch(0.82 0.15 190 / 0.3)",
                }}
              >
                <Mail
                  className="flex-shrink-0"
                  size={22}
                  style={{ color: "oklch(0.82 0.15 190)" }}
                />
                <div>
                  <div className="text-heading font-semibold text-sm">
                    Email
                  </div>
                  <div className="text-body text-xs">
                    arslanwebify@gmail.com
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-card-dark rounded-2xl border border-neon p-6">
              <h3 className="font-heading font-semibold text-heading text-lg mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/muhammad-arslan-7593a838b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.link"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "oklch(0.82 0.15 190 / 0.1)",
                    border: "1px solid oklch(0.82 0.15 190 / 0.3)",
                    color: "oklch(0.82 0.15 190)",
                  }}
                >
                  <SiLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/x9_arslan"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.link"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "oklch(0.82 0.15 190 / 0.1)",
                    border: "1px solid oklch(0.82 0.15 190 / 0.3)",
                    color: "oklch(0.82 0.15 190)",
                  }}
                >
                  <SiInstagram size={20} />
                </a>
              </div>
            </div>

            <div className="bg-card-dark rounded-2xl border border-neon p-5 text-center">
              <div className="text-neon-cyan font-semibold text-sm mb-1">
                🏆 Certified SEO Specialist
              </div>
              <div className="text-body text-xs">
                DigiSkills Certified | 50+ Projects | Worldwide Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
