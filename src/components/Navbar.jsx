import { useState, useEffect } from "react";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Overview", href: "#overview" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Export Map", href: "#map" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 bg-brand-forest/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.06)] ${
          isScrolled ? "py-4" : "py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            data-cursor="home"
          >
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-deep-green to-brand-forest border border-brand-gold/30 flex items-center justify-center overflow-hidden">
              <Globe className="w-5 h-5 text-brand-gold group-hover:rotate-45 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-gold/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            <div>
              <span className="font-serif text-lg lg:text-xl font-bold tracking-widest text-white uppercase block leading-none">
                Indus Royal
              </span>
              <span className="text-[9px] uppercase tracking-widest text-brand-gold font-medium mt-1 block">
                Premium Global Export
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm tracking-widest text-white/70 hover:text-white uppercase transition-colors relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="relative overflow-hidden group px-6 py-2.5 rounded-full border border-brand-gold/40 hover:border-brand-gold transition-colors duration-300 bg-brand-black/20"
              data-cursor="quote"
            >
              <span className="relative z-10 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white group-hover:text-brand-black transition-colors duration-300">
                Contact Us
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              {/* Sliding Gold Background */}
              <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-forest/95 z-[99] pt-28 px-8 flex flex-col gap-8 md:hidden backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl tracking-widest text-white/80 hover:text-white uppercase transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  {link.name}
                  <ArrowUpRight className="w-5 h-5 text-brand-gold" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 py-4 w-full rounded-full border border-brand-gold/60 text-center font-bold tracking-widest uppercase text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
