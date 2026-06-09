import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sparkles, Navigation, Award } from "lucide-react";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      id: "spices",
      title: "Crimson & Gold Spices",
      subtitle: "The Aroma of Heritage",
      image: `${import.meta.env.BASE_URL}luxury_spices.png`,
      description:
        "Sourced from the micro-climates of the Western Ghats in Kerala, our spices are hand-selected at peak maturity. We export only AAA-graded green cardamom, high-piperine Tellicherry black pepper, and premium Kashmiri saffron threads.",
      specs: [
        { label: "Purity Index", value: "99.8% Chemical Free" },
        { label: "Origin estates", value: "Idukki & Wayanad, Kerala" },
        { label: "Custom Grades", value: "AAA Bolt (Cardamom)" },
        { label: "Packaging", value: "Aseptic, Nitrogen-Flushed" },
      ],
    },
    {
      id: "grains",
      title: "Pearled Basmati Grains",
      subtitle: "The Long-Grain Standard",
      image: `${import.meta.env.BASE_URL}luxury_rice.png`,
      description:
        "Cultivated at the foothills of the Himalayas, irrigated by mineral-rich snowmelt. Our premium traditional Basmati rice undergoes a meticulous 2-year aging process in temperature-controlled warehouses to develop its signature elongated grains and nutty aroma.",
      specs: [
        { label: "Average Grain Length", value: "8.45 mm (Pre-cooked)" },
        { label: "Aging Duration", value: "24 Months Sealed" },
        { label: "Moisture Content", value: "Under 12% Max" },
        { label: "Chalky Grains", value: "Below 1% Trace" },
      ],
    },
    {
      id: "herbs",
      title: "Botanical Wellness Herbs",
      subtitle: "Apothecary-Grade Purity",
      image: `${import.meta.env.BASE_URL}luxury_herbs.png`,
      description:
        "Pure wellness ingredients cultivated under strict biodynamic farming practices. From certified organic moringa powder to sun-dried turmeric roots with active curcumin content above 5.5%, we fulfill demanding global pharmaceutical and health standards.",
      specs: [
        { label: "Active Curcumin", value: "5.5% - 6.8% Certified" },
        { label: "Heavy Metal Profile", value: "Zero Detectable Limits" },
        { label: "Certifications", value: "USDA Organic, NPOP India" },
        { label: "Processing", value: "Low-Temp Dehydration" },
      ],
    },
    {
      id: "tea",
      title: "High-Altitude Tea & Coffee",
      subtitle: "Single-Estate Rarities",
      image: `${import.meta.env.BASE_URL}luxury_tea.png`,
      description:
        "Sourced from historic, high-altitude estates in Darjeeling and the volcanic hills of Baba Budangiri. We pack rare first-flush orthodox teas and shade-grown Arabica coffees, delivering refined palates to luxury distributors globally.",
      specs: [
        { label: "Elevation", value: "1,500m - 2,200m ASL" },
        { label: "Harvest Method", value: "Hand-Plucked (Two Leaves & Bud)" },
        { label: "Roast Profile", value: "Custom Micro-Lot Roasting" },
        { label: "Grade", value: "FTGFOP1 (Darjeeling Tea)" },
      ],
    },
  ];

  return (
    <section id="products" className="relative w-full py-24 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block mb-3 font-sans">
            Curated Global Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide">
            Our Luxury Agricultural Portfolios
          </h2>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Product Switcher Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Product Selector buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {products.map((product, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? "bg-brand-deep-green/30 border-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      : "bg-white/[0.02] border-white/5 hover:border-white/20"
                  }`}
                  data-cursor="select"
                >
                  {/* Subtle Background Glow for Active Item */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-gradient-to-r from-brand-forest/20 to-transparent -z-10"
                    />
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] tracking-widest font-bold uppercase ${
                      isActive ? "text-brand-gold" : "text-white/40"
                    }`}>
                      Portfolio 0{index + 1}
                    </span>
                    <Sparkles className={`w-3.5 h-3.5 ${isActive ? "text-brand-gold opacity-100" : "text-white/0"}`} />
                  </div>

                  <div>
                    <h3 className={`font-serif text-lg sm:text-xl font-medium ${
                      isActive ? "text-white" : "text-white/60"
                    }`}>
                      {product.title}
                    </h3>
                    <p className={`text-xs mt-1 font-light ${
                      isActive ? "text-white/80" : "text-white/40"
                    }`}>
                      {product.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Product Details & Image */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 glass-panel p-8 rounded-3xl relative overflow-hidden"
              >
                {/* Background light glow */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-brand-deep-green/10 blur-[80px] pointer-events-none -z-10" />

                {/* Left pane: Image Showcase */}
                <div className="relative h-60 md:h-full rounded-2xl overflow-hidden border border-white/10 group aspect-[4/5]">
                  <motion.img
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={products[activeTab].image}
                    alt={products[activeTab].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-black/60 border border-brand-gold/30 backdrop-blur-md">
                    <Shield className="w-3 h-3 text-brand-gold" />
                    <span className="text-[8px] uppercase tracking-widest font-bold text-brand-gold">
                      Quality Verified
                    </span>
                  </div>
                </div>

                {/* Right pane: Narrative & Tech Specs */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5 mb-2">
                      <Navigation className="w-3 h-3 rotate-45 text-brand-gold" />
                      Global Dispatch
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4">
                      {products[activeTab].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                      {products[activeTab].description}
                    </p>
                  </div>

                  {/* Tech specifications table */}
                  <div className="border-t border-white/10 pt-4">
                    <h5 className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-3 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-gold" />
                      Technical Parameters
                    </h5>
                    <div className="grid grid-cols-2 gap-4">
                      {products[activeTab].specs.map((spec, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[9px] uppercase text-white/40 font-light">
                            {spec.label}
                          </span>
                          <span className="text-xs text-white font-medium mt-0.5">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
