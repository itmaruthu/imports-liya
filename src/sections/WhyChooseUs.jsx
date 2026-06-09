import { motion } from "framer-motion";
import { ShieldCheck, Layers, Users, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Phytosanitary & Pure Sourcing",
      desc: "Every shipment is certified to contain zero residues, artificial additives, or chemical pesticides. We coordinate directly with regional testing laboratories to match strict phytosanitary regulations of the EU, FDA, and GCC countries.",
    },
    {
      icon: Layers,
      title: "Customized Protective Packaging",
      desc: "Whether vacuum-sealed bags, nitrogen-flushed retail boxes, or customized luxury jute sacs, we structure our packaging to lock moisture levels, preserving delicate essential oils and flavors across multi-week ocean voyages.",
    },
    {
      icon: Zap,
      title: "Cold-Chain Logistics Integration",
      desc: "Our logistics partners employ state-of-the-art cold containers (reefers) to regulate cargo temperatures from the farm gate in India to port warehouses, neutralizing moisture spike risks completely.",
    },
    {
      icon: Users,
      title: "Empowering Farm Communities",
      desc: "We work directly with over 8,000 grower cooperatives in the Indian subcontinent. By offering premium fair-trade pricing, we secure priority harvests and ensure sustainable agricultural practices.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-brand-black overflow-hidden border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-deep-green/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading and Tag */}
        <div className="lg:col-span-5 text-left">
          <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block mb-3 font-sans">
            Uncompromising Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide leading-tight">
            Setting the Standard in <br />
            <span className="text-shine">International Sourcing</span>
          </h2>
          <p className="mt-6 text-sm text-white/50 font-light leading-relaxed max-w-md">
            Importing agricultural commodities requires absolute precision. We remove operational uncertainty by maintaining strict control over agricultural inputs, cold storage parameters, custom clearing, and shipping timelines.
          </p>

          {/* Interactive Badge */}
          <div className="mt-8 p-6 glass-panel rounded-2xl border-l-2 border-brand-gold max-w-sm">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans mb-1">
              Zero Cargo Rejection Rate
            </h4>
            <p className="text-xs text-white/60 font-light leading-relaxed">
              In 2024 and 2025, 100% of our global shipments successfully cleared customs inspections on first attempt.
            </p>
          </div>
        </div>

        {/* Right Column: Key Value Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div>
                  <div className="p-3 bg-brand-deep-green/50 border border-brand-gold/20 rounded-xl w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans group-hover:text-brand-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-3 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
