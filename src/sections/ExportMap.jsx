import { useState } from "react";
import { Globe, Anchor, Clock } from "lucide-react";

export default function ExportMap() {
  const [hoveredHub, setHoveredHub] = useState(null);

  const hubs = [
    {
      id: "mumbai",
      name: "Mumbai Port (JNPT), India",
      role: "Sourcing & Logistics HQ",
      coords: { x: 520, y: 245 },
      details: "Primary agricultural dispatch gateway. Custom clearing and cold chain staging.",
    },
    {
      id: "rotterdam",
      name: "Rotterdam, Netherlands",
      role: "Europe Distribution Hub",
      coords: { x: 390, y: 145 },
      details: "Transit: 16 Days. Servicing EU organic food and gourmet spice distributors.",
    },
    {
      id: "ny",
      name: "New York Port, USA",
      role: "North America Hub",
      coords: { x: 230, y: 155 },
      details: "Transit: 22 Days. Supplying organic grains and wellness botanicals.",
    },
    {
      id: "dubai",
      name: "Jebel Ali, Dubai (UAE)",
      role: "Middle East Hub",
      coords: { x: 470, y: 220 },
      details: "Transit: 4 Days. Premium basmati rice and high-grade cardamom dispatch.",
    },
    {
      id: "singapore",
      name: "Singapore Port",
      role: "APAC Gateway Hub",
      coords: { x: 620, y: 275 },
      details: "Transit: 7 Days. Bulk grain and single-estate tea shipments.",
    },
  ];

  const routes = [
    { from: "mumbai", to: "rotterdam", control: { x: 440, y: 180 } },
    { from: "mumbai", to: "ny", control: { x: 350, y: 170 } },
    { from: "mumbai", to: "dubai", control: { x: 495, y: 230 } },
    { from: "mumbai", to: "singapore", control: { x: 575, y: 265 } },
  ];

  return (
    <section id="map" className="relative w-full py-24 bg-brand-black overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-deep-green/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-widest font-bold text-brand-gold uppercase block mb-3 font-sans">
            Global Supply Network
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide">
            Our Trade Routes & Hubs
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/50 font-light max-w-xl mx-auto">
            Interactive visualization of our priority logistics pathways, linking major Indian ports directly to high-demand importing nations.
          </p>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Graphic (Lg: Col 8) */}
          <div className="lg:col-span-8 glass-panel p-4 sm:p-6 rounded-3xl relative overflow-hidden bg-brand-black/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping" />
              <span className="text-[9px] uppercase tracking-wider text-white/60 font-medium font-sans">
                Live Vessel Routes Active
              </span>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="w-full aspect-[16/9] min-h-[300px]">
              <svg
                viewBox="0 0 800 450"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* World landmass outline proxy (elegant minimalist shapes representing continents) */}
                <g fill="rgba(255, 255, 255, 0.025)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
                  {/* North America */}
                  <path d="M 50 100 Q 150 70 240 100 T 260 190 T 210 240 T 150 180 Z" />
                  {/* South America */}
                  <path d="M 210 240 Q 250 280 260 350 T 210 420 T 190 350 Z" />
                  {/* Eurasia / Africa */}
                  <path d="M 290 150 Q 380 90 490 100 T 680 90 T 780 120 T 750 240 T 630 310 T 520 280 Z" />
                  <path d="M 320 200 Q 400 240 430 350 T 350 410 T 310 290 Z" />
                  {/* Australia */}
                  <path d="M 690 330 Q 750 340 760 380 T 680 400 Z" />
                </g>

                {/* Animated bezier path lines */}
                {routes.map((route, idx) => {
                  const fromHub = hubs.find((h) => h.id === route.from);
                  const toHub = hubs.find((h) => h.id === route.to);
                  if (!fromHub || !toHub) return null;

                  return (
                    <g key={idx}>
                      {/* Underlay route line */}
                      <path
                        d={`M ${fromHub.coords.x} ${fromHub.coords.y} Q ${route.control.x} ${route.control.y} ${toHub.coords.x} ${toHub.coords.y}`}
                        fill="none"
                        stroke="rgba(212, 175, 55, 0.12)"
                        strokeWidth="1.5"
                      />
                      {/* Animated dash route overlay */}
                      <path
                        d={`M ${fromHub.coords.x} ${fromHub.coords.y} Q ${route.control.x} ${route.control.y} ${toHub.coords.x} ${toHub.coords.y}`}
                        fill="none"
                        stroke="url(#goldGradient)"
                        strokeWidth="1.5"
                        strokeDasharray="6 8"
                        className="animated-route"
                        style={{
                          animation: "dash 4s linear infinite",
                          animationDelay: `${idx * 0.8}s`,
                        }}
                      />
                    </g>
                  );
                })}

                {/* Definitions for Gradients / Animation */}
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-brand-deep-green)" />
                    <stop offset="50%" stopColor="var(--color-brand-gold)" />
                    <stop offset="100%" stopColor="var(--color-brand-gold-light)" />
                  </linearGradient>
                  
                  {/* Inline CSS injection for route dashes animation */}
                  <style>{`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: -50;
                      }
                    }
                    .animated-route {
                      stroke-linecap: round;
                    }
                  `}</style>
                </defs>

                {/* Hub Pulsating Rings & Pins */}
                {hubs.map((hub) => (
                  <g
                    key={hub.id}
                    onMouseEnter={() => setHoveredHub(hub)}
                    onMouseLeave={() => setHoveredHub(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulsating outer gold circle */}
                    <circle
                      cx={hub.coords.x}
                      cy={hub.coords.y}
                      r={hub.id === "mumbai" ? 8 : 6}
                      fill="none"
                      stroke="var(--color-brand-gold)"
                      strokeWidth="1.5"
                      className="opacity-70"
                    >
                      <animate
                        attributeName="r"
                        values={hub.id === "mumbai" ? "6;16;6" : "4;11;4"}
                        dur={hub.id === "mumbai" ? "2.5s" : "3.5s"}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0;0.8"
                        dur={hub.id === "mumbai" ? "2.5s" : "3.5s"}
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    {/* Inner anchor pin dot */}
                    <circle
                      cx={hub.coords.x}
                      cy={hub.coords.y}
                      r={hub.id === "mumbai" ? 4 : 3}
                      fill={hub.id === "mumbai" ? "var(--color-brand-gold)" : "#ffffff"}
                      stroke="var(--color-brand-black)"
                      strokeWidth="1"
                    />
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Hub Sidebar details (Lg: Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-3xl min-h-[220px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-brand-gold/5 blur-xl rounded-full pointer-events-none" />
              
              <div>
                <span className="text-[8px] uppercase tracking-[0.25em] text-brand-gold font-bold flex items-center gap-1 mb-3">
                  <Globe className="w-3.5 h-3.5 text-brand-gold" />
                  Hub Diagnostics
                </span>
                
                {hoveredHub ? (
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white leading-tight">
                      {hoveredHub.name}
                    </h3>
                    <p className="text-[10px] text-brand-gold font-medium uppercase tracking-widest mt-1">
                      {hoveredHub.role}
                    </p>
                    <p className="text-xs text-white/60 mt-4 leading-relaxed font-light">
                      {hoveredHub.details}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white/70">
                      Hover Over a Map Pin
                    </h3>
                    <p className="text-xs text-white/40 mt-3 font-light leading-relaxed">
                      Interact with the pulsating nodes on our global logistics map to audit specific ocean routes, average cargo transit days, and seaport parameters.
                    </p>
                  </div>
                )}
              </div>

              {hoveredHub && (
                <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-[10px] text-white/40 font-mono">
                  <span className="flex items-center gap-1">
                    <Anchor className="w-3 h-3 text-brand-gold" /> Port Cargo Clear
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-gold" /> Transit Priority
                  </span>
                </div>
              )}
            </div>

            {/* Quick stats box */}
            <div className="glass-panel-gold p-6 rounded-3xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">
                  Port Partners
                </h4>
                <p className="text-[10px] text-brand-gold uppercase tracking-widest mt-0.5">
                  Direct Dock Staging
                </p>
              </div>
              <div className="text-right">
                <span className="font-serif text-2xl font-bold text-white">12+</span>
                <span className="block text-[9px] text-white/40 uppercase tracking-widest">
                  International Terminals
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
