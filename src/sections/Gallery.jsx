import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, MapPin, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Western Ghats Cardamom Estates",
      location: "Munnar, Kerala",
      image: `${import.meta.env.BASE_URL}gallery_farming.png`,
      span: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[16/10]",
    },
    {
      id: 2,
      title: "Global Container Intermodal Vessel",
      location: "Indian Ocean Transit",
      image: `${import.meta.env.BASE_URL}gallery_cargo.png`,
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 3,
      title: "Hand-Sorted Saffron Threads",
      location: "Pampore, Kashmir",
      image: `${import.meta.env.BASE_URL}luxury_spices.png`,
      span: "md:col-span-1 md:row-span-2",
      aspect: "aspect-[3/4]",
    },
    {
      id: 4,
      title: "Aromatic Basmati Cured Grains",
      location: "Karnal, Haryana",
      image: `${import.meta.env.BASE_URL}luxury_rice.png`,
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 5,
      title: "Single-Estate Leaf Plucking",
      location: "Darjeeling, West Bengal",
      image: `${import.meta.env.BASE_URL}luxury_tea.png`,
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 6,
      title: "Biodynamic Wellness Harvests",
      location: "Chikmagalur, Karnataka",
      image: `${import.meta.env.BASE_URL}luxury_herbs.png`,
      span: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[2/1]",
    },
  ];

  return (
    <section id="gallery" className="relative w-full py-24 bg-brand-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block mb-3 font-sans">
            Visual Chronicles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide">
            Estates & Logistics Gallery
          </h2>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${item.span} relative rounded-3xl overflow-hidden border border-white/10 group cursor-pointer bg-brand-dark flex flex-col`}
              onClick={() => setSelectedImage(item)}
              data-cursor="view"
            >
              {/* Image Container */}
              <div className={`relative w-full h-full overflow-hidden ${item.aspect} md:aspect-auto md:flex-grow`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.9]"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Floating Eye Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-brand-black/60 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4 text-brand-gold" />
                </div>
              </div>

              {/* Title Overlay Info (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-left relative md:absolute z-10">
                <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  {item.location}
                </span>
                <h3 className="font-serif text-sm sm:text-base font-semibold text-white mt-1 group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Pop-up */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-brand-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-brand-gold transition-colors border border-white/5"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Expanded Content Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="max-w-4xl w-full flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing on clicking box
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[16/10] relative max-h-[70vh]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left px-2">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  {selectedImage.location}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-white/50 mt-1 font-light leading-relaxed">
                  Indus Royal trace validation: authenticated harvesting land, certified local phytosanitary documentation.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
