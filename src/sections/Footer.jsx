import { useState } from "react";
import { Globe, ArrowUp, Send, Check } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full pt-20 pb-10 bg-brand-black overflow-hidden border-t border-white/5">
      {/* Footer Ambient Green Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(18,94,55,0.15),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Segment: Brand and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-deep-green to-brand-forest border border-brand-gold/30 flex items-center justify-center">
                <Globe className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <span className="font-serif text-lg lg:text-xl font-bold tracking-widest text-white uppercase block leading-none">
                  Indus Royal
                </span>
                <span className="text-[9px] uppercase tracking-widest text-brand-gold font-medium mt-1 block">
                  Premium Global Export
                </span>
              </div>
            </div>
            
            <p className="text-xs text-white/50 leading-relaxed font-light max-w-sm mb-6">
              Distributing India’s premier spices, organic botanicals, and long-grain Basmati rice under corporate-grade quality standards. Serving buyers in Europe, the Americas, GCC, and APAC.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">
                Export Member:
              </span>
              <span className="text-[9px] uppercase font-bold text-brand-gold border border-brand-gold/30 px-2.5 py-1 rounded bg-brand-gold/5">
                APEDA India
              </span>
              <span className="text-[9px] uppercase font-bold text-brand-gold border border-brand-gold/30 px-2.5 py-1 rounded bg-brand-gold/5">
                FIEO
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white mb-6">
              Global Portfolios
            </h4>
            <ul className="text-xs text-white/50 space-y-3 font-light">
              <li>
                <a href="#overview" className="hover:text-brand-gold transition-colors">
                  Overview & Heritage
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-brand-gold transition-colors">
                  Royal Spices & Grains
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-gold transition-colors">
                  Cold-Chain Pipeline
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-brand-gold transition-colors">
                  Logistic Trade Map
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-gold transition-colors">
                  Estates & Shipping Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Intelligence Desk */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white mb-6">
              Global Sourcing Intel
            </h4>
            <p className="text-xs text-white/50 font-light mb-4 leading-relaxed">
              Subscribe to receive crop yield forecasts, pricing reports, and export regulations.
            </p>
            
            {subscribed ? (
              <div className="flex items-center gap-2 text-brand-gold text-xs font-semibold py-3">
                <Check className="w-4 h-4" /> Subscription confirmed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative w-full">
                <input
                  type="email"
                  required
                  placeholder="importer@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/20 text-xs focus:border-brand-gold focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 p-2 rounded-lg bg-brand-gold text-brand-black hover:scale-105 transition-transform"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Mid Segment: Port Offices / Operations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-b border-white/5 text-left text-xs font-light text-white/50">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-white mb-3">
              Corporate Office
            </h4>
            <p>BKC Trade Chambers, G-Block,</p>
            <p>Bandra Kurla Complex, Mumbai, MH, India</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-white mb-3">
              Mundra Port Office
            </h4>
            <p>Cargo Terminal Complex, Gate 4,</p>
            <p>Mundra Port SEZ, Gujarat, India</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-white mb-3">
              Cochin Port Terminal
            </h4>
            <p>Willingdon Island Freight Center,</p>
            <p>Cochin Port, Kerala, India</p>
          </div>
        </div>

        {/* Bottom Segment: Copyright & Up Button */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono text-center sm:text-left">
            © {new Date().getFullYear()} Indus Royal. All rights reserved. Sourced ethically from India.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-brand-gold text-white hover:text-brand-gold hover:scale-110 transition-all"
            aria-label="Scroll to top"
            data-cursor="top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
