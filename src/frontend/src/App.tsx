import { Toaster } from "@/components/ui/sonner";
import About from "./components/About";
import CTASection from "./components/CTASection";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.08 0.02 250)" }}
    >
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <CaseStudies />
        <About />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
