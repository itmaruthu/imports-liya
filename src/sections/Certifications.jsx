import { ShieldCheck, Award, FileCheck, Star } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      name: "APEDA Approved",
      sub: "Agri-Export Authority India",
      desc: "Registered exporter under Ministry of Commerce, ensuring compliance with strict grade criteria.",
      icon: ShieldCheck,
    },
    {
      name: "ISO 22000:2018",
      sub: "Food Safety Management",
      desc: "International system certification monitoring food processing risks from estate to harbor.",
      icon: Award,
    },
    {
      name: "USDA Organic",
      sub: "US NOP Standard Certified",
      desc: "Validating chemical-free cultivating lands, organic processing, and strict crop containment.",
      icon: Star,
    },
    {
      name: "FSSAI Premium License",
      sub: "Food Safety Standards India",
      desc: "Central licensing approval proving strict compliance with local packaging and handling protocols.",
      icon: FileCheck,
    },
    {
      name: "NPOP Organic India",
      sub: "National Organic Standard",
      desc: "Compliance with India's agricultural organic parameters, matching equivalence with EU standards.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative w-full py-20 bg-brand-black/90 overflow-hidden border-t border-b border-white/5">
      {/* Background glow lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block mb-3 font-sans">
            Regulatory Compliance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-wide">
            Global Accreditations & Quality Endorsements
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.05)] transition-all duration-300 relative group"
              >
                {/* Gold Top Light Line */}
                <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-brand-gold/15 rounded-lg border border-brand-gold/20">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="text-[9px] font-mono text-white/30">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xs font-bold text-white uppercase tracking-wider font-sans group-hover:text-brand-gold transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-[9px] text-brand-gold uppercase tracking-widest mt-1">
                    {cert.sub}
                  </p>
                  <p className="text-[11px] text-white/50 mt-4 leading-relaxed font-light">
                    {cert.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
