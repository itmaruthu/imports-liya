import { motion } from "framer-motion";
import { ArrowDown, Star, Sparkles, Anchor } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.8 },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-20">
      {/* Background Cinematic Video / Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.05] brightness-[0.35]"
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02cba73f1d85a06566085a6a6878b40&profile_id=139&oauth2_token_id=57447761"
          onError={(e) => {
            // Fallback if video fails to load: set background gradient
            e.target.style.display = "none";
          }}
        />
        {/* Luxury Radial & Linear Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/75 to-brand-black" />
        <div className="absolute inset-0 bg-radial-at-t from-brand-deep-green/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-80px)] py-12">
        {/* Left: Text & CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left flex flex-col justify-center"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-deep-green/60 border border-brand-gold/30 w-fit mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-[10px] tracking-widest font-bold text-brand-gold font-sans uppercase">
              India's Premier Agri-Exporter
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white tracking-wide"
          >
            Connecting Indian Quality to <br className="hidden sm:inline" />
            <span className="text-shine">Global Markets</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-white/60 font-sans tracking-wide max-w-xl font-light"
          >
            Premium agricultural import & export solutions worldwide. We source, inspect, and distribute India’s finest spices, grains, and organic produce with unmatched corporate prestige.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4 sm:gap-6 items-center"
          >
            <a
              href="#products"
              className="relative px-8 py-3.5 rounded-full bg-brand-gold text-brand-black text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105"
              data-cursor="explore"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300"
              data-cursor="quote"
            >
              Get Quote
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Floating Luxury Cards */}
        <div className="lg:col-span-5 relative w-full h-[350px] lg:h-[450px] flex items-center justify-center">
          {/* Card 1: Top Left */}
          <motion.div
            variants={badgeVariants}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-4 left-4 sm:left-12 lg:left-0 glass-panel p-6 rounded-2xl max-w-[220px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-l-2 border-l-brand-gold"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-gold/10 rounded-lg">
                <Star className="w-5 h-5 text-brand-gold fill-brand-gold/20" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wider font-sans">
                  Premium
                </h4>
                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
                  100% Quality Assurance
                </p>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-3 font-light leading-relaxed">
              APEDA, ISO & USDA Organic Certified. Traceable fields, zero pesticides.
            </p>
          </motion.div>

          {/* Card 2: Center Right */}
          <motion.div
            variants={badgeVariants}
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-12 right-4 sm:right-12 lg:right-0 glass-panel p-6 rounded-2xl max-w-[240px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-l-2 border-l-brand-gold"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-gold/10 rounded-lg">
                <Anchor className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wider font-sans">
                  Global Logistics
                </h4>
                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
                  Direct Cold Chain
                </p>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-3 font-light leading-relaxed">
              Expedited shipping from Mumbai, Mundra, and Cochin ports to 50+ countries.
            </p>
          </motion.div>

          {/* Glowing Background Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-deep-green/20 blur-[80px] pointer-events-none -z-10" />
        </div>
      </div>

      {/* Decorative Bottom Fade and Scroll Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-4 h-4 text-brand-gold" />
        </motion.div>
      </div>
    </section>
  );
}
