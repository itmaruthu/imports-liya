import { useState } from "react";
import { Send, CheckCircle2, Building, Mail, Landmark } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    category: "spices",
    quantity: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setIsSubmitted(true);
    setTimeout(() => {
      // Clear form
      setFormData({
        name: "",
        email: "",
        country: "",
        category: "spices",
        quantity: "",
        notes: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-brand-black overflow-hidden border-t border-white/5">
      {/* Background Orbs */}
      <div className="absolute -top-12 right-12 w-80 h-80 bg-brand-deep-green/10 blur-[90px] pointer-events-none -z-10" />
      <div className="absolute -bottom-12 left-12 w-80 h-80 bg-brand-forest/10 blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Text Details */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block mb-3 font-sans">
              Importer Inquiry Desk
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide leading-tight">
              Request a Custom <br />
              <span className="text-shine">Freight Quote</span>
            </h2>
            <p className="mt-6 text-sm text-white/50 font-light leading-relaxed max-w-md">
              Submit your specific product grades and volume metrics. Our global sourcing desk will coordinate availability, logistics packaging options, and FOB/CIF seaport pricing within 24 hours.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <Building className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Corporate Office
                  </h4>
                  <p className="text-xs text-white/50 font-light mt-0.5">
                    Indus Royal Chambers, BKC, Mumbai, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Sourcing Desk
                  </h4>
                  <p className="text-xs text-white/50 font-light mt-0.5">
                    trade@indusroyalexports.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <Landmark className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Export Banking
                  </h4>
                  <p className="text-xs text-white/50 font-light mt-0.5">
                    State Bank of India (Central Corporate Branch)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-brand-gold mb-6 animate-pulse" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-xs text-white/60 mt-3 max-w-sm leading-relaxed font-light">
                    Our trade officers are auditing agricultural allocations and seaport booking timetables. A structured CIF quote will be emailed to your corporate address shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-xs font-bold tracking-widest text-brand-gold uppercase hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-white/60 mb-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Johnathan Doe"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/20 text-sm focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-white/60 mb-2">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="trade@company.com"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/20 text-sm focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Destination Country and Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-white/60 mb-2">
                        Importing Country
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="Germany, UAE, USA"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/20 text-sm focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <div className="flex flex-col text-left">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-white/60 mb-2">
                        Target Volume (Metric Tons)
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 24 MT (1 Container)"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/20 text-sm focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Category dropdown */}
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-white/60 mb-2">
                      Agricultural Portfolio
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-[#0e0e0e] border border-white/10 text-white text-sm focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="spices">Crimson & Gold Spices</option>
                      <option value="grains">Pearled Basmati Grains</option>
                      <option value="herbs">Botanical Wellness Herbs</option>
                      <option value="tea">High-Altitude Tea & Coffee</option>
                      <option value="other">Multiple Categories / Other</option>
                    </select>
                  </div>

                  {/* Custom Notes */}
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-white/60 mb-2">
                      Specification Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify grading, moisture levels, retail/bulk packaging demands..."
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-white/20 text-sm focus:border-brand-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="relative overflow-hidden group py-4 rounded-xl border border-brand-gold bg-brand-gold text-brand-black text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                    data-cursor="submit"
                  >
                    Transmit Inquiry
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
