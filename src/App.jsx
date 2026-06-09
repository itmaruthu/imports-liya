import { ReactLenis } from "lenis/react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import OverviewBento from "./sections/OverviewBento";
import ProductShowcase from "./sections/ProductShowcase";
import WhyChooseUs from "./sections/WhyChooseUs";
import ExportMap from "./sections/ExportMap";
import Timeline from "./sections/Timeline";
import Certifications from "./sections/Certifications";
import Gallery from "./sections/Gallery";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="relative min-h-screen bg-brand-black text-white selection:bg-brand-gold selection:text-brand-black overflow-hidden font-sans">
        
        {/* Custom Premium Cursor Follower */}
        <CustomCursor />

        {/* Floating Glassmorphic Header Navigation */}
        <Navbar />

        {/* Page Flow Sections */}
        <main>
          {/* Section 1: Luxury Fullscreen Hero */}
          <Hero />

          {/* Section 2: Bento Grid Company Overview */}
          <OverviewBento />

          {/* Section 3: Animated Product Showcase Switcher */}
          <ProductShowcase />

          {/* Section 4: Why Choose Us (Sourcing, Packaging, Reefers) */}
          <WhyChooseUs />

          {/* Section 5: Animated World Export Map */}
          <ExportMap />

          {/* Section 6: Export Process Timeline */}
          <Timeline />

          {/* Section 7: Official Certifications Panel */}
          <Certifications />

          {/* Section 8: Elegant Gallery with Parallax & Lightbox */}
          <Gallery />

          {/* Section 9: Luxury Custom Quote Contact Form */}
          <ContactForm />
        </main>

        {/* Section 10: Cinematic Glowing Footer */}
        <Footer />
        
      </div>
    </ReactLenis>
  );
}
