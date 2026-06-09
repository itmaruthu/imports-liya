import { useState, useEffect, useRef } from "react";
import { Globe, Anchor, Clock } from "lucide-react";

export default function ExportMap() {
  const [hoveredHub, setHoveredHub] = useState(null);
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, rot: 0 });
  const rotationRef = useRef(1.2); // Initial rotation angle pointing near India/Asia

  const hubs = [
    {
      id: "mumbai",
      name: "Mumbai Port (JNPT), India",
      role: "Sourcing & Logistics HQ",
      lat: 19.0760 * Math.PI / 180,
      lng: 72.8777 * Math.PI / 180,
      details: "Primary agricultural dispatch gateway. Custom clearing and cold chain staging."
    },
    {
      id: "rotterdam",
      name: "Rotterdam, Netherlands",
      role: "Europe Distribution Hub",
      lat: 51.9244 * Math.PI / 180,
      lng: 4.4777 * Math.PI / 180,
      details: "Transit: 16 Days. Servicing EU organic food and gourmet spice distributors."
    },
    {
      id: "ny",
      name: "New York Port, USA",
      role: "North America Hub",
      lat: 40.7128 * Math.PI / 180,
      lng: -74.0060 * Math.PI / 180,
      details: "Transit: 22 Days. Supplying organic grains and wellness botanicals."
    },
    {
      id: "dubai",
      name: "Jebel Ali, Dubai (UAE)",
      role: "Middle East Hub",
      lat: 25.2048 * Math.PI / 180,
      lng: 55.2708 * Math.PI / 180,
      details: "Transit: 4 Days. Premium basmati rice and high-grade cardamom dispatch."
    },
    {
      id: "singapore",
      name: "Singapore Port",
      role: "Southeast Asia Hub",
      lat: 1.3521 * Math.PI / 180,
      lng: 103.8198 * Math.PI / 180,
      details: "Transit: 7 Days. Bulk grain and single-estate tea shipments."
    },
    {
      id: "sydney",
      name: "Sydney Port, Australia",
      role: "Oceania Hub",
      lat: -33.8688 * Math.PI / 180,
      lng: 151.2093 * Math.PI / 180,
      details: "Transit: 14 Days. Direct shipping lines for luxury grains & tea."
    },
    {
      id: "mombasa",
      name: "Mombasa Port, Kenya",
      role: "Africa Distribution Hub",
      lat: -4.0435 * Math.PI / 180,
      lng: 39.6682 * Math.PI / 180,
      details: "Transit: 10 Days. Servicing emerging premium wellness markets."
    }
  ];

  // Bounding boxes representing landmass grids on a sphere
  const landmasses = [
    { latMin: 15, latMax: 70, lngMin: -130, lngMax: -60 },   // North America
    { latMin: -55, latMax: 12, lngMin: -80, lngMax: -35 },   // South America
    { latMin: 36, latMax: 75, lngMin: -10, lngMax: 170 },    // Europe & Russia
    { latMin: -35, latMax: 35, lngMin: -18, lngMax: 51 },    // Africa
    { latMin: 5, latMax: 35, lngMin: 60, lngMax: 95 },       // India & South Asia
    { latMin: 10, latMax: 55, lngMin: 95, lngMax: 145 },     // East Asia
    { latMin: -40, latMax: -11, lngMin: 113, lngMax: 154 },  // Australia
    { latMin: -10, latMax: 10, lngMin: 95, lngMax: 150 },    // Southeast Asia
    { latMin: 60, latMax: 83, lngMin: -70, lngMax: -20 }     // Greenland
  ];

  // Helper to determine if a point on the grid falls in a highlighted region
  const getPointColor = (lat, lng) => {
    // Convert to degrees for easier bounds check
    const latDeg = lat * 180 / Math.PI;
    const lngDeg = lng * 180 / Math.PI;

    // India (Hub)
    if (latDeg >= 8 && latDeg <= 33 && lngDeg >= 68 && lngDeg <= 89) {
      return "rgba(200, 160, 60, 0.7)";
    }
    // USA
    if (latDeg >= 24 && latDeg <= 49 && lngDeg >= -125 && lngDeg <= -70) {
      return "rgba(200, 160, 60, 0.45)";
    }
    // Europe
    if (latDeg >= 36 && latDeg <= 65 && lngDeg >= -10 && lngDeg <= 30) {
      return "rgba(200, 160, 60, 0.45)";
    }
    // UAE
    if (latDeg >= 22 && latDeg <= 26 && lngDeg >= 51 && lngDeg <= 56) {
      return "rgba(200, 160, 60, 0.6)";
    }
    // Australia
    if (latDeg >= -40 && latDeg <= -11 && lngDeg >= 113 && lngDeg <= 154) {
      return "rgba(200, 160, 60, 0.45)";
    }
    // Southeast Asia
    if (latDeg >= -10 && latDeg <= 20 && lngDeg >= 95 && lngDeg <= 140) {
      return "rgba(200, 160, 60, 0.45)";
    }
    // Africa
    if (latDeg >= -35 && latDeg <= 35 && lngDeg >= -18 && lngDeg <= 51) {
      return "rgba(200, 160, 60, 0.35)";
    }
    
    // Default world grid dots
    return "rgba(255, 255, 255, 0.055)";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let width = 0;
    let height = 0;
    let R = 150; // Radius of globe

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.width * 9 / 16;
      if (height < 320) height = 320;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      R = Math.min(width, height) * 0.38;
    };

    resize();
    window.addEventListener("resize", resize);

    // Pre-generate map grid points (lat, lng) representing landmasses
    const mapPoints = [];
    for (let latDeg = -80; latDeg <= 80; latDeg += 4.5) {
      for (let lngDeg = -180; lngDeg <= 180; lngDeg += 4.5) {
        const insideLand = landmasses.some(
          (box) =>
            latDeg >= box.latMin &&
            latDeg <= box.latMax &&
            lngDeg >= box.lngMin &&
            lngDeg <= box.lngMax
        );
        if (insideLand) {
          const lat = latDeg * Math.PI / 180;
          const lng = lngDeg * Math.PI / 180;
          mapPoints.push({
            lat,
            lng,
            color: getPointColor(lat, lng),
            // Static 3D coordinates relative to sphere radius R=1
            x: Math.cos(lat) * Math.sin(lng),
            y: -Math.sin(lat),
            z: Math.cos(lat) * Math.cos(lng),
          });
        }
      }
    }

    // Static 3D coordinates for hubs
    const hubPoints = hubs.map((h) => ({
      ...h,
      x: Math.cos(h.lat) * Math.sin(h.lng),
      y: -Math.sin(h.lat),
      z: Math.cos(h.lat) * Math.cos(h.lng),
    }));

    // Generate static 3D arc points from India to destinations
    const indiaHub = hubPoints.find((h) => h.id === "mumbai");
    const arcRoutes = hubPoints
      .filter((h) => h.id !== "mumbai")
      .map((dest) => {
        const steps = 40;
        const points = [];
        
        // Spherical interpolation to form great circle arcs
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          // Interpolate vectors
          let x = indiaHub.x * (1 - t) + dest.x * t;
          let y = indiaHub.y * (1 - t) + dest.y * t;
          let z = indiaHub.z * (1 - t) + dest.z * t;
          
          // Normalize vector to get point on sphere
          const len = Math.sqrt(x * x + y * y + z * z);
          x /= len;
          y /= len;
          z /= len;
          
          // Add elevation curve peaking in the center
          const altCurve = 0.22 * Math.sin(Math.PI * t);
          const factor = 1 + altCurve;
          
          points.push({
            x: x * factor,
            y: y * factor,
            z: z * factor,
          });
        }
        return {
          destId: dest.id,
          points,
        };
      });

    let tiltAngle = 0.35; // Slight tilt
    let time = 0;

    const rotateX = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x,
        y: y * cos - z * sin,
        z: y * sin + z * cos,
      };
    };

    const rotateY = (x, y, z, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: x * cos - z * sin,
        y,
        z: x * sin + z * cos,
      };
    };

    const loop = () => {
      time += 1;
      
      // Auto rotate if not dragging
      if (!isDraggingRef.current) {
        rotationRef.current += 0.0025;
      }

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle ambient glow under the globe
      const ambientGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        R * 0.8,
        centerX,
        centerY,
        R * 1.3
      );
      ambientGlow.addColorStop(0, "rgba(200, 160, 60, 0.03)");
      ambientGlow.addColorStop(1, "rgba(8, 24, 38, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, R * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // 1. Draw Back-facing landmass grid (depth z < 0) for 3D transparency
      mapPoints.forEach((pt) => {
        // Rotate around Y (spin) and then X (tilt)
        let rotated = rotateY(pt.x * R, pt.y * R, pt.z * R, rotationRef.current);
        rotated = rotateX(rotated.x, rotated.y, rotated.z, tiltAngle);

        if (rotated.z < 0) {
          ctx.fillStyle = pt.color.replace(/[\d.]+\)$/, "0.08)"); // make back-facing points very faint
          ctx.beginPath();
          ctx.arc(centerX + rotated.x, centerY + rotated.y, 0.85, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 2. Draw Back-facing trade arcs
      arcRoutes.forEach((route) => {
        ctx.beginPath();
        let first = true;
        route.points.forEach((pt) => {
          let rotated = rotateY(pt.x * R, pt.y * R, pt.z * R, rotationRef.current);
          rotated = rotateX(rotated.x, rotated.y, rotated.z, tiltAngle);
          
          if (rotated.z < 0) {
            if (first) {
              ctx.moveTo(centerX + rotated.x, centerY + rotated.y);
              first = false;
            } else {
              ctx.lineTo(centerX + rotated.x, centerY + rotated.y);
            }
          }
        });
        ctx.strokeStyle = "rgba(200, 160, 60, 0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 3. Draw Front-facing landmass grid (depth z >= 0)
      mapPoints.forEach((pt) => {
        let rotated = rotateY(pt.x * R, pt.y * R, pt.z * R, rotationRef.current);
        rotated = rotateX(rotated.x, rotated.y, rotated.z, tiltAngle);

        if (rotated.z >= 0) {
          ctx.fillStyle = pt.color;
          ctx.beginPath();
          // Slightly larger dots for highlighted areas
          const isGold = pt.color.includes("200");
          const dotSize = isGold ? 1.4 : 1;
          ctx.arc(centerX + rotated.x, centerY + rotated.y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 4. Draw Front-facing trade arcs
      arcRoutes.forEach((route) => {
        ctx.beginPath();
        let first = true;
        let visibleCount = 0;
        
        route.points.forEach((pt) => {
          let rotated = rotateY(pt.x * R, pt.y * R, pt.z * R, rotationRef.current);
          rotated = rotateX(rotated.x, rotated.y, rotated.z, tiltAngle);
          
          if (rotated.z >= 0) {
            visibleCount++;
            if (first) {
              ctx.moveTo(centerX + rotated.x, centerY + rotated.y);
              first = false;
            } else {
              ctx.lineTo(centerX + rotated.x, centerY + rotated.y);
            }
          }
        });
        
        if (visibleCount > 1) {
          ctx.strokeStyle = "rgba(200, 160, 60, 0.22)";
          ctx.lineWidth = 1.25;
          ctx.stroke();
        }
      });

      // 5. Draw animated trade flow particles on front-facing arcs
      arcRoutes.forEach((route) => {
        // Offset progress over time for staggering flow
        const speed = 0.0075;
        let progress = (time * speed) % 1;
        if (route.destId === "ny") progress = (time * speed + 0.25) % 1;
        if (route.destId === "rotterdam") progress = (time * speed + 0.5) % 1;
        if (route.destId === "sydney") progress = (time * speed + 0.75) % 1;

        const idx = Math.floor(progress * route.points.length);
        const pt = route.points[idx];
        if (pt) {
          let rotated = rotateY(pt.x * R, pt.y * R, pt.z * R, rotationRef.current);
          rotated = rotateX(rotated.x, rotated.y, rotated.z, tiltAngle);
          
          if (rotated.z >= 0) {
            ctx.shadowColor = "#C8A03C";
            ctx.shadowBlur = 8;
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(centerX + rotated.x, centerY + rotated.y, 2.5, 0, Math.PI * 2);
            ctx.fill();
            
            // Reset shadow
            ctx.shadowBlur = 0;
          }
        }
      });

      // 6. Draw Interactive Hub Pins & detect hovers
      const mousePos = mousePosRef.current;
      let activeHover = null;

      hubPoints.forEach((hub) => {
        let rotated = rotateY(hub.x * R, hub.y * R, hub.z * R, rotationRef.current);
        rotated = rotateX(rotated.x, rotated.y, rotated.z, tiltAngle);

        if (rotated.z >= 0) {
          const x2d = centerX + rotated.x;
          const y2d = centerY + rotated.y;

          // Check mouse collision
          const dx = mousePos.x - x2d;
          const dy = mousePos.y - y2d;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const isHovered = dist < 14;
          if (isHovered) {
            activeHover = hub;
          }

          // Pulsating glow ring
          const pulse = 1 + 0.6 * Math.sin(time * 0.06 + hub.lat * 5);
          const opacity = 0.85 - 0.4 * pulse;
          ctx.strokeStyle = `rgba(200, 160, 60, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x2d, y2d, isHovered ? 12 : 5 * pulse, 0, Math.PI * 2);
          ctx.stroke();

          // Center solid dot
          ctx.fillStyle = hub.id === "mumbai" ? "#ffffff" : "#C8A03C";
          ctx.strokeStyle = "#081826";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(x2d, y2d, hub.id === "mumbai" ? 4.5 : 3.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Draw place names next to the pin
          const labelText = hub.id === "mumbai" ? "Indus Royal (Mumbai)" : hub.name.split(",")[0];
          ctx.font = "bold 9px sans-serif";
          
          if (isHovered) {
            ctx.fillStyle = "rgba(16, 39, 59, 0.95)";
            ctx.strokeStyle = "rgba(200, 160, 60, 0.8)";
            ctx.lineWidth = 1;
            const textWidth = ctx.measureText(labelText).width;
            
            // Draw background pill
            ctx.beginPath();
            ctx.roundRect(x2d + 8, y2d - 9, textWidth + 12, 17, 4);
            ctx.fill();
            ctx.stroke();
            
            // Draw text in gold
            ctx.fillStyle = "#C8A03C";
            ctx.fillText(labelText, x2d + 14, y2d + 3);
          } else {
            // Permanent elegant label
            ctx.fillStyle = "rgba(248, 248, 248, 0.85)";
            ctx.strokeStyle = "rgba(8, 24, 38, 0.9)";
            ctx.lineWidth = 2.5;
            ctx.strokeText(labelText, x2d + 8, y2d + 3);
            ctx.fillText(labelText, x2d + 8, y2d + 3);
          }
        }
      });

      // Update active hovered state in React safely
      if (activeHover !== hoveredHub) {
        setHoveredHub(activeHover);
      }

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [hoveredHub]);

  // Handle Dragging rotation
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rot: rotationRef.current,
    };
  };

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    
    // Update mouse positions relative to canvas
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (isDraggingRef.current) {
      const deltaX = e.clientX - dragStartRef.current.x;
      // Convert pixel delta to rotation angle
      rotationRef.current = dragStartRef.current.rot + deltaX * 0.006;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

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
            Interactive 3D visualization of our priority logistics pathways, linking major Indian ports directly to high-demand importing nations. Click and drag to rotate the globe.
          </p>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Globe Graphic (Lg: Col 8) */}
          <div className="lg:col-span-8 glass-panel p-4 sm:p-6 rounded-3xl relative overflow-hidden bg-brand-black/35 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="absolute top-4 left-6 flex items-center gap-2 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping" />
              <span className="text-[9px] uppercase tracking-wider text-white/60 font-medium font-sans">
                Interactive 3D rotating Globe
              </span>
            </div>

            {/* Canvas Interactive Container */}
            <div className="w-full flex justify-center items-center relative select-none">
              <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className="cursor-grab active:cursor-grabbing max-w-full"
              />
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
                      Hover Over a Globe Node
                    </h3>
                    <p className="text-xs text-white/40 mt-3 font-light leading-relaxed">
                      Audit specific ocean routes, average cargo transit days, and seaport parameters by hovering over the pulsating nodes on the rotating 3D globe.
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
