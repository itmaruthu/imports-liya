import { motion } from "framer-motion";
import { Search, ShieldAlert, Package, Ship } from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      icon: Search,
      title: "Step 01: Ethical Farm Sourcing",
      subtitle: "Securing Priority Harvests",
      desc: "Our agronomists visit partnering cooperatives in spice and grain zones across India. We audit farming habits, soil mineral health, and water quality before acquiring the harvest, guaranteeing organic premium crop yields.",
      details: ["Soil and water pre-audits", "Fair-Trade price contracts", "Traceable agricultural zones"],
    },
    {
      icon: ShieldAlert,
      title: "Step 02: Laboratory Grade Testing",
      subtitle: "Phytosanitary & Residue Controls",
      desc: "Harvests are transported to partner labs where they undergo double-testing for heavy metals, molds, aflatoxin, and pesticide residue. Batch codes are stamped for full digital traceability.",
      details: ["Zero pesticide residue clearance", "Aflatoxin & microbial screening", "Phytosanitary certification"],
    },
    {
      icon: Package,
      title: "Step 03: High-Tech Processing & Packing",
      subtitle: "Locking In Freshness",
      desc: "Using advanced machinery, crops are sifted, color-sorted, and clean-air dried. We pack commodities in vacuum pouches, multi-layer laminated bags, or nitrogen-flushed packages to eliminate deterioration during cargo transit.",
      details: ["Color-sorting purification", "Nitrogen-flushed retail containers", "Aseptic bulk cardboard crating"],
    },
    {
      icon: Ship,
      title: "Step 04: Intermodal Sea Logistics",
      subtitle: "Cold Chain Transport",
      desc: "Cargos are loaded into refrigerated marine containers (reefers) under remote temperature supervision. We coordinate with shipping alliances to dispatch goods from Mumbai and Cochin to global harbors with priority booking.",
      details: ["Real-time cargo tracking", "Reefer temperature regulations", "Priority seaport clearance"],
    },
  ];

  return (
    <section id="process" className="relative w-full py-24 bg-brand-black overflow-hidden border-t border-white/5">
      {/* Decorative vertical background line overlay */}
      <div className="absolute top-[300px] bottom-[300px] left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-brand-gold/30 via-brand-gold/10 to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block mb-3 font-sans">
            Streamlined Supply Flow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide">
            Our Export Pipeline Timeline
          </h2>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-16 md:gap-24">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative w-full ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Visual Icon Node (Center of timeline in desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-black border border-brand-gold/40 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(212,175,55,0.2)] hidden md:flex">
                  <Icon className="w-4 h-4 text-brand-gold" />
                </div>

                {/* Left Side: Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                  className="w-full md:w-[45%] glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-brand-gold/30 transition-all duration-300"
                >
                  <div className="absolute right-0 top-0 w-24 h-24 bg-brand-deep-green/10 blur-xl rounded-full pointer-events-none" />

                  {/* Icon for Mobile */}
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="p-2.5 bg-brand-gold/15 rounded-xl border border-brand-gold/25">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-[10px] text-brand-gold tracking-widest font-bold uppercase">
                        {step.subtitle}
                      </h4>
                    </div>
                  </div>

                  <span className="text-[10px] tracking-widest text-brand-gold/70 font-semibold uppercase hidden md:block">
                    {step.subtitle}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-white mt-2 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <div className="border-t border-white/5 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, i) => (
                        <span
                          key={i}
                          className="text-[9px] font-sans font-medium tracking-wider text-white/70 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Side: Visual Placeholder Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-[45%] h-52 md:h-64 rounded-3xl border border-white/5 bg-gradient-to-tr from-brand-deep-green/10 via-white/[0.01] to-transparent p-8 flex flex-col justify-end overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  <span className="font-serif text-[100px] text-white/5 font-bold absolute top-0 right-4 select-none leading-none">
                    0{idx + 1}
                  </span>

                  <div className="relative z-10 text-left">
                    <span className="text-[10px] tracking-widest text-brand-gold uppercase font-bold">
                      Protocol Parameter
                    </span>
                    <h4 className="text-sm font-semibold text-white mt-1">
                      International Standard Compliant
                    </h4>
                    <p className="text-[11px] text-white/40 mt-1 max-w-xs font-light">
                      Fulfilling importing controls of food, agriculture, and customs authorities worldwide.
                    </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
