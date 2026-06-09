import { motion } from "framer-motion";
import { ShieldCheck, Truck, Award, Sprout, ArrowUpRight } from "lucide-react";

export default function OverviewBento() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <section id="overview" className="relative w-full py-24 bg-brand-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-deep-green/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-forest/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block mb-3 font-sans">
            Corporate Integrity & Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide">
            Cultivating Excellence. <br />
            <span className="text-white/60">Exporting Trust Globally.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          {/* Card 1: Our Heritage (Large - Col 2, Row 2) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 md:row-span-2 glass-panel-gold rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative group"
            data-cursor="heritage"
          >
            <div className="absolute right-0 bottom-0 w-[45%] h-[90%] bg-gradient-to-t from-brand-deep-green/40 to-transparent blur-3xl rounded-full -z-10 group-hover:scale-125 transition-transform duration-700" />
            
            <div className="flex justify-between items-start">
              <div className="p-3 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl w-fit">
                <Sprout className="w-6 h-6 text-brand-gold" />
              </div>
              <span className="text-[10px] tracking-widest text-brand-gold/70 font-semibold uppercase">
                ESTABLISHED ORIGINS
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight">
                Honoring India's Rich <br className="hidden sm:inline" />
                Agricultural Legacy
              </h3>
              <p className="text-sm sm:text-base text-white/60 max-w-xl font-light leading-relaxed">
                Indus Royal connects fertile, organic Indian soils to global markets. Sourced directly from partner estates in Kerala, Punjab, and Karnataka, our products carry the flavor, purity, and excellence of ancient farming traditions upgraded with modern quality standards.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Stats (Medium - Col 1, Row 1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-500 group"
          >
            <span className="text-[10px] tracking-widest text-brand-gold/70 font-semibold uppercase">
              Global Capacity
            </span>
            <div>
              <h3 className="font-serif text-4xl lg:text-5xl font-bold text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                140K+
              </h3>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-2">
                Metric Tons Exported Annually
              </p>
            </div>
          </motion.div>

          {/* Card 3: Supply Chain (Medium - Col 1, Row 1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-500 group"
          >
            <div className="p-2.5 bg-white/5 rounded-xl w-fit border border-white/5">
              <Truck className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                Seamless Logistics
              </h3>
              <p className="text-xs text-white/60 mt-2 font-light leading-relaxed">
                Direct cold chain systems locking freshness from farms to seaport terminals within 24 hours of harvest.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Certifications list (Medium - Col 1, Row 2) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-500 md:row-span-2 group"
          >
            <div className="p-3 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl w-fit">
              <Award className="w-5 h-5 text-brand-gold" />
            </div>

            <div className="my-auto py-4">
              <h3 className="text-base font-bold text-white tracking-wide mb-3">
                Unyielding Compliance
              </h3>
              <ul className="text-xs text-white/60 space-y-3 font-light">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  APEDA Registered Exporter
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  ISO 22000 & HACCP Standards
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  FSSAI Food Safety Accredited
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  USDA Organic Compliant
                </li>
              </ul>
            </div>

            <span className="text-[10px] tracking-widest text-brand-gold uppercase font-bold flex items-center gap-1 group-hover:underline">
              View Standards <ArrowUpRight className="w-3 h-3" />
            </span>
          </motion.div>

          {/* Card 5: Global Reach statement (Large - Col 2, Row 1) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-forest/20 blur-2xl rounded-full pointer-events-none -z-10 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="flex justify-between items-center">
              <span className="text-[10px] tracking-widest text-brand-gold/70 font-semibold uppercase">
                International Presence
              </span>
              <span className="text-2xl font-serif font-bold text-white/30">02</span>
            </div>

            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white leading-tight">
                Global Operations Across 6 Continents
              </h3>
              <p className="text-xs sm:text-sm text-white/50 mt-2 font-light max-w-xl leading-relaxed">
                Custom packaging, chemical-free phytosanitary cleaning, and cargo management matching exact regulations of EU, Middle East, USA, and East Asia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
