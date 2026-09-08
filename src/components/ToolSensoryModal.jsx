import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Wind,
  Droplets,
  Scissors,
  Zap,
  CheckCircle2,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Flame,
  ShieldCheck,
  RotateCcw
} from "lucide-react";

export default function ToolSensoryModal({
  tool,
  onClose,
  onSelectTool,
  allTools,
  onOpenBooking
}) {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simPulse, setSimPulse] = useState(0);
  const triggerTimeoutRef = useRef(null);

  // Keyboard navigation: Escape to close, Left/Right arrow to cycle tools
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        navigateTool(-1);
      } else if (e.key === "ArrowRight") {
        navigateTool(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (triggerTimeoutRef.current) clearTimeout(triggerTimeoutRef.current);
    };
  }, [tool]);

  const currentIndex = allTools.findIndex((t) => t.id === tool.id);

  const navigateTool = (direction) => {
    const nextIndex = (currentIndex + direction + allTools.length) % allTools.length;
    onSelectTool(allTools[nextIndex].id);
    setIsSimulating(false);
  };

  const triggerSensorySimulation = () => {
    setIsSimulating(true);
    setSimPulse((prev) => prev + 1);

    if (triggerTimeoutRef.current) clearTimeout(triggerTimeoutRef.current);
    triggerTimeoutRef.current = setTimeout(() => {
      setIsSimulating(false);
    }, 2800);
  };

  // Render the high-definition interactive SVG animation for each tool
  const renderInteractiveStage = () => {
    switch (tool.iconType) {
      case "dryer":
        return (
          <div className={`sensory-canvas canvas-dryer ${isSimulating ? "turbo-active" : ""}`}>
            <svg viewBox="0 0 400 280" className="sensory-interactive-svg">
              <defs>
                <linearGradient id="dryerBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#25211b" />
                  <stop offset="50%" stopColor="#171512" />
                  <stop offset="100%" stopColor="#0c0b09" />
                </linearGradient>
                <linearGradient id="goldAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fae7c9" />
                  <stop offset="50%" stopColor="#d4a75e" />
                  <stop offset="100%" stopColor="#9a712f" />
                </linearGradient>
                <radialGradient id="nozzleGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffc078" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#d4a75e" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d4a75e" stopOpacity="0" />
                </radialGradient>
                <filter id="glowAir" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Heat Glow from Nozzle */}
              <ellipse cx="205" cy="130" rx="45" ry="40" fill="url(#nozzleGlow)" className="dryer-heat-halo" />

              {/* HAIR DRYER BLOWING AIR STREAMS & SWIRLS */}
              <g className="dryer-air-gusts">
                {/* Main Wind Streams */}
                <path className="wind-wave-1" d="M 205 110 Q 260 95 320 102 T 390 98" fill="none" stroke="#fae7c9" strokeWidth="3" strokeLinecap="round" opacity="0.85" filter="url(#glowAir)" />
                <path className="wind-wave-2" d="M 210 125 Q 275 118 340 128 T 395 120" fill="none" stroke="#d4a75e" strokeWidth="4" strokeLinecap="round" opacity="0.95" />
                <path className="wind-wave-3" d="M 210 135 Q 280 142 345 136 T 395 142" fill="none" stroke="#fae7c9" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
                <path className="wind-wave-4" d="M 205 148 Q 265 162 330 152 T 385 160" fill="none" stroke="#d4a75e" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />

                {/* Secondary Fast Air Streaks */}
                <path className="wind-speed-streak streak-1" d="M 220 95 L 360 85" stroke="rgba(250,231,201,0.6)" strokeWidth="2" strokeDasharray="30 15" strokeLinecap="round" />
                <path className="wind-speed-streak streak-2" d="M 225 118 L 380 114" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeDasharray="40 20" strokeLinecap="round" />
                <path className="wind-speed-streak streak-3" d="M 225 140 L 375 144" stroke="rgba(212,167,94,0.7)" strokeWidth="2" strokeDasharray="35 15" strokeLinecap="round" />
                <path className="wind-speed-streak streak-4" d="M 220 162 L 350 168" stroke="rgba(250,231,201,0.5)" strokeWidth="1.5" strokeDasharray="25 12" strokeLinecap="round" />

                {/* Floating Air Swirl Wisps */}
                <circle className="air-wisp wisp-1" cx="240" cy="105" r="3.5" fill="#fae7c9" />
                <circle className="air-wisp wisp-2" cx="290" cy="122" r="4.5" fill="#d4a75e" />
                <circle className="air-wisp wisp-3" cx="330" cy="140" r="3" fill="#ffffff" />
                <circle className="air-wisp wisp-4" cx="360" cy="110" r="3.8" fill="#fae7c9" />
                <circle className="air-wisp wisp-5" cx="270" cy="150" r="2.5" fill="#d4a75e" />
                <circle className="air-wisp wisp-6" cx="380" cy="132" r="3" fill="#ffffff" />
              </g>

              {/* Blow Dryer Body */}
              <g className={`dryer-chassis ${isSimulating ? "dryer-vibe" : ""}`}>
                {/* Handle */}
                <path d="M 95 145 L 110 235 C 112 245 128 245 130 235 L 132 145 Z" fill="url(#dryerBodyGrad)" stroke="#d4a75e" strokeWidth="2" strokeLinejoin="round" />
                <rect x="110" y="200" width="8" height="14" rx="2" fill="#d4a75e" />
                <circle cx="114" cy="175" r="4" fill="#fae7c9" />

                {/* Cord Accent Ring */}
                <path d="M 115 240 Q 112 260 118 275" stroke="#443c32" strokeWidth="4" fill="none" strokeLinecap="round" />

                {/* Rear Cylinder / Intake Filter */}
                <rect x="35" y="100" width="45" height="60" rx="8" fill="#12100d" stroke="#d4a75e" strokeWidth="2" />
                <circle cx="57" cy="130" r="18" fill="#080706" stroke="rgba(212,167,94,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="57" cy="130" r="10" fill="#1b1814" stroke="#d4a75e" strokeWidth="1.5" />

                {/* Main Barrel */}
                <path d="M 80 95 L 170 102 C 176 102 180 106 180 112 L 180 148 C 180 154 176 158 170 158 L 80 165 Z" fill="url(#dryerBodyGrad)" stroke="#d4a75e" strokeWidth="2.5" />

                {/* Gold Trim Bands */}
                <line x1="125" y1="98" x2="125" y2="162" stroke="url(#goldAccentGrad)" strokeWidth="3" />
                <line x1="160" y1="101" x2="160" y2="159" stroke="url(#goldAccentGrad)" strokeWidth="3" />

                {/* Professional Concentrator Nozzle */}
                <path d="M 180 112 L 205 118 L 205 142 L 180 148 Z" fill="#0d0b09" stroke="#fae7c9" strokeWidth="2" strokeLinejoin="round" />
                <ellipse cx="205" cy="130" rx="3.5" ry="12" fill="#d4a75e" />

                {/* Tourmaline Ionic Indicator LED */}
                <circle cx="145" cy="115" r="3.5" fill="#74c0fc" className="ionic-led" />
              </g>
            </svg>

            {/* Live Indicator Overlay */}
            <div className="canvas-badge-strip">
              <span className="live-pulse-dot" />
              <span>{isSimulating ? "TURBO AIRFLOW: 110,000 RPM BLAST" : "IONIC THERMAL AIRFLOW ACTIVE"}</span>
            </div>
          </div>
        );

      case "spray":
        return (
          <div className={`sensory-canvas canvas-spray ${isSimulating ? "spray-active" : ""}`}>
            <svg viewBox="0 0 400 280" className="sensory-interactive-svg">
              <defs>
                <linearGradient id="sprayBottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1f232e" />
                  <stop offset="50%" stopColor="#151821" />
                  <stop offset="100%" stopColor="#0b0d12" />
                </linearGradient>
                <linearGradient id="waterFluidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(77, 171, 247, 0.45)" />
                  <stop offset="80%" stopColor="rgba(116, 192, 252, 0.2)" />
                  <stop offset="100%" stopColor="rgba(212, 167, 94, 0.3)" />
                </linearGradient>
                <filter id="mistGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* WATER SPRAY SPRINKLING MIST & DROPLETS */}
              <g className="spray-mist-cone">
                <path className="mist-cone-bg" d="M 195 95 Q 280 40 380 30 L 390 190 Q 280 150 195 105 Z" fill="url(#waterFluidGrad)" opacity="0.45" filter="url(#mistGlow)" />

                {/* Floating Arc Water Droplets */}
                <circle className="spray-drop drop-1" cx="215" cy="85" r="2" fill="#a5d8ff" />
                <circle className="spray-drop drop-2" cx="235" cy="72" r="3.2" fill="#74c0fc" />
                <circle className="spray-drop drop-3" cx="260" cy="60" r="2.5" fill="#ffffff" />
                <circle className="spray-drop drop-4" cx="290" cy="52" r="3.8" fill="#a5d8ff" />
                <circle className="spray-drop drop-5" cx="330" cy="45" r="2.8" fill="#74c0fc" />
                <circle className="spray-drop drop-6" cx="370" cy="40" r="3.5" fill="#ffffff" />

                {/* Mid-Stream Droplets */}
                <circle className="spray-drop drop-7" cx="225" cy="98" r="3" fill="#ffffff" />
                <circle className="spray-drop drop-8" cx="255" cy="95" r="4" fill="#a5d8ff" />
                <circle className="spray-drop drop-9" cx="295" cy="92" r="3.5" fill="#74c0fc" />
                <circle className="spray-drop drop-10" cx="340" cy="95" r="4.2" fill="#ffffff" />
                <circle className="spray-drop drop-11" cx="380" cy="98" r="3" fill="#a5d8ff" />

                {/* Lower Spray Fan Droplets */}
                <circle className="spray-drop drop-12" cx="220" cy="115" r="2.2" fill="#74c0fc" />
                <circle className="spray-drop drop-13" cx="250" cy="125" r="3.5" fill="#a5d8ff" />
                <circle className="spray-drop drop-14" cx="285" cy="138" r="3" fill="#ffffff" />
                <circle className="spray-drop drop-15" cx="330" cy="150" r="4" fill="#74c0fc" />
                <circle className="spray-drop drop-16" cx="370" cy="165" r="3.2" fill="#a5d8ff" />

                {/* Splash Water Ripple Waves */}
                <path className="mist-ripple ripple-1" d="M 230 75 Q 235 95 230 115" fill="none" stroke="rgba(165,216,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                <path className="mist-ripple ripple-2" d="M 275 60 Q 285 95 275 130" fill="none" stroke="rgba(116,192,252,0.6)" strokeWidth="2" strokeLinecap="round" />
                <path className="mist-ripple ripple-3" d="M 325 48 Q 340 95 325 145" fill="none" stroke="rgba(250,231,201,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* Water Spray Bottle */}
              <g className="spray-bottle-chassis">
                <rect x="75" y="125" width="85" height="120" rx="14" fill="url(#sprayBottleGrad)" stroke="#d4a75e" strokeWidth="2.5" />
                <rect x="85" y="145" width="65" height="90" rx="8" fill="url(#waterFluidGrad)" stroke="rgba(212,167,94,0.3)" strokeWidth="1" />
                <path d="M 85 170 Q 115 165 150 170 L 150 235 L 85 235 Z" fill="rgba(77, 171, 247, 0.25)" />
                <line x1="117" y1="120" x2="117" y2="235" stroke="rgba(255,255,255,0.35)" strokeWidth="3" strokeLinecap="round" />

                <rect x="95" y="105" width="45" height="20" rx="4" fill="#0f1116" stroke="#d4a75e" strokeWidth="2" />
                <line x1="95" y1="112" x2="140" y2="112" stroke="#d4a75e" strokeWidth="1.5" />
                <line x1="95" y1="118" x2="140" y2="118" stroke="#d4a75e" strokeWidth="1.5" />

                <path d="M 100 105 L 100 75 C 100 65 110 58 125 58 L 175 58 C 182 58 188 64 188 72 L 188 95 C 188 100 182 105 175 105 L 140 105 Z" fill="#171b24" stroke="#d4a75e" strokeWidth="2" />

                <path d="M 188 72 L 196 76 L 196 90 L 188 94 Z" fill="#d4a75e" stroke="#fae7c9" strokeWidth="1.5" />
                <circle cx="196" cy="83" r="2.5" fill="#74c0fc" />

                <path className={`spray-lever ${isSimulating ? "lever-squeeze" : ""}`} d="M 148 78 Q 140 110 130 135 C 127 142 136 146 140 138 Q 152 110 160 82 Z" fill="url(#goldAccentGrad)" stroke="#111" strokeWidth="1" />
              </g>
            </svg>

            {/* Live Indicator Overlay */}
            <div className="canvas-badge-strip">
              <span className="live-pulse-dot dot-blue" />
              <span>{isSimulating ? "SPRINKLING CONTINUOUS 0.3mm MICRO-MIST" : "ALOE-INFUSED PRESSURIZED MIST READY"}</span>
            </div>
          </div>
        );

      case "shears":
        return (
          <div className={`sensory-canvas canvas-shears ${isSimulating ? "shears-snip-fast" : ""}`}>
            <svg viewBox="0 0 400 280" className="sensory-interactive-svg">
              <defs>
                <linearGradient id="bladeSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#dedede" />
                  <stop offset="70%" stopColor="#999999" />
                  <stop offset="100%" stopColor="#555555" />
                </linearGradient>
                <linearGradient id="goldShearAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fae7c9" />
                  <stop offset="100%" stopColor="#b3873f" />
                </linearGradient>
              </defs>

              <g className="shear-cut-sparks">
                <line x1="280" y1="120" x2="310" y2="140" stroke="rgba(250,231,201,0.8)" strokeWidth="2" strokeLinecap="round" className="sparkle-line spark-1" />
                <line x1="270" y1="145" x2="295" y2="160" stroke="rgba(212,167,94,0.8)" strokeWidth="1.5" strokeLinecap="round" className="sparkle-line spark-2" />
                <circle cx="285" cy="132" r="3" fill="#fff" className="spark-dot" />
                <path d="M 290 125 Q 305 140 315 165" stroke="#777" strokeWidth="1.5" strokeLinecap="round" fill="none" className="falling-strand strand-1" />
                <path d="M 280 135 Q 295 155 300 180" stroke="#888" strokeWidth="1.2" strokeLinecap="round" fill="none" className="falling-strand strand-2" />
              </g>

              <g className="shears-assembly">
                <g className="shear-upper-blade">
                  <ellipse cx="90" cy="85" rx="22" ry="18" fill="none" stroke="#d4a75e" strokeWidth="5" />
                  <path d="M 112 85 L 195 140 L 320 128 C 300 138 240 148 195 142 Z" fill="url(#bladeSteel)" stroke="#9a712f" strokeWidth="1.5" />
                </g>
                <g className="shear-lower-blade">
                  <ellipse cx="90" cy="195" rx="22" ry="18" fill="none" stroke="#d4a75e" strokeWidth="5" />
                  <path d="M 70 205 Q 55 220 50 235" stroke="#d4a75e" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M 112 195 L 195 140 L 320 152 C 300 142 240 132 195 138 Z" fill="url(#bladeSteel)" stroke="#9a712f" strokeWidth="1.5" />
                </g>
                <circle cx="195" cy="140" r="11" fill="url(#goldShearAccent)" stroke="#111" strokeWidth="2" />
                <circle cx="195" cy="140" r="5" fill="#111" />
                <circle cx="195" cy="140" r="2" fill="#fae7c9" />
              </g>
            </svg>

            <div className="canvas-badge-strip">
              <span className="live-pulse-dot" />
              <span>{isSimulating ? "SURGICAL 45° CONVEX SCISSOR SNIP" : "HAND-BALANCED TAKEFU 440C ALLOY"}</span>
            </div>
          </div>
        );

      case "trimmers":
        return (
          <div className={`sensory-canvas canvas-trimmers ${isSimulating ? "trimmers-turbo-buzz" : ""}`}>
            <svg viewBox="0 0 400 280" className="sensory-interactive-svg">
              <defs>
                <linearGradient id="trimmerBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1a14" />
                  <stop offset="50%" stopColor="#12100d" />
                  <stop offset="100%" stopColor="#080706" />
                </linearGradient>
              </defs>

              <g className="trimmer-laser-beam">
                <line x1="285" y1="140" x2="385" y2="140" stroke="#d4a75e" strokeWidth="2.5" strokeDasharray="8 4" opacity="0.85" className="laser-beam-line" />
                <polygon points="385,136 395,140 385,144" fill="#fae7c9" />
                <circle cx="290" cy="132" r="2" fill="#fae7c9" className="spark-dot" />
                <circle cx="295" cy="148" r="2.5" fill="#d4a75e" className="spark-dot" />
              </g>

              <g className={`trimmer-assembly ${isSimulating ? "buzz-intense" : "buzz-idle"}`}>
                <rect x="75" y="115" width="160" height="50" rx="12" fill="url(#trimmerBody)" stroke="#d4a75e" strokeWidth="2.5" />
                <line x1="110" y1="122" x2="110" y2="158" stroke="rgba(212,167,94,0.3)" strokeWidth="2" />
                <line x1="125" y1="122" x2="125" y2="158" stroke="rgba(212,167,94,0.3)" strokeWidth="2" />
                <line x1="140" y1="122" x2="140" y2="158" stroke="rgba(212,167,94,0.3)" strokeWidth="2" />
                <line x1="155" y1="122" x2="155" y2="158" stroke="rgba(212,167,94,0.3)" strokeWidth="2" />
                <rect x="180" y="125" width="35" height="30" rx="4" fill="#080706" stroke="#d4a75e" strokeWidth="1.5" />
                <circle cx="197" cy="140" r="8" fill="none" stroke="#fae7c9" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M 235 125 L 265 110 L 265 170 L 235 155 Z" fill="#14110d" stroke="#d4a75e" strokeWidth="2" />
                <path className="trimmer-teeth" d="M 265 110 L 285 105 L 285 175 L 265 170 Z" fill="#d4a75e" stroke="#fae7c9" strokeWidth="1" />
                <line x1="285" y1="112" x2="282" y2="112" stroke="#111" strokeWidth="2" />
                <line x1="285" y1="120" x2="282" y2="120" stroke="#111" strokeWidth="2" />
                <line x1="285" y1="128" x2="282" y2="128" stroke="#111" strokeWidth="2" />
                <line x1="285" y1="136" x2="282" y2="136" stroke="#111" strokeWidth="2" />
                <line x1="285" y1="144" x2="282" y2="144" stroke="#111" strokeWidth="2" />
                <line x1="285" y1="152" x2="282" y2="152" stroke="#111" strokeWidth="2" />
                <line x1="285" y1="160" x2="282" y2="160" stroke="#111" strokeWidth="2" />
                <line x1="285" y1="168" x2="282" y2="168" stroke="#111" strokeWidth="2" />
                <rect x="85" y="132" width="14" height="16" rx="3" fill="#d4a75e" />
                <circle cx="108" cy="140" r="3.5" fill="#40c057" className="power-led" />
              </g>
            </svg>

            <div className="canvas-badge-strip">
              <span className="live-pulse-dot dot-green" />
              <span>{isSimulating ? "7,200 SPM MAGNETIC MOTOR ENGAGED" : "BLACK DIAMOND DLC ZERO-GAP BLADE"}</span>
            </div>
          </div>
        );

      case "wax":
        return (
          <div className={`sensory-canvas canvas-wax ${isSimulating ? "wax-warm-active" : ""}`}>
            <svg viewBox="0 0 400 280" className="sensory-interactive-svg">
              <defs>
                <linearGradient id="waxClayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4a3e2f" />
                  <stop offset="50%" stopColor="#302619" />
                  <stop offset="100%" stopColor="#1a140b" />
                </linearGradient>
                <radialGradient id="aromaPulse" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d4a75e" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#d4a75e" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g className="aroma-scent-waves">
                <circle cx="200" cy="140" r="85" fill="url(#aromaPulse)" className="aroma-pulse-ring ring-1" />
                <circle cx="200" cy="140" r="115" fill="url(#aromaPulse)" className="aroma-pulse-ring ring-2" />
                <path d="M 180 95 Q 170 60 185 30" fill="none" stroke="#fae7c9" strokeWidth="2" strokeLinecap="round" className="aroma-wisp wisp-1" />
                <path d="M 215 90 Q 235 55 215 25" fill="none" stroke="#d4a75e" strokeWidth="2.5" strokeLinecap="round" className="aroma-wisp wisp-2" />
                <path d="M 240 95 Q 260 65 245 35" fill="none" stroke="#fae7c9" strokeWidth="1.8" strokeLinecap="round" className="aroma-wisp wisp-3" />
              </g>

              <g className="wax-tin-container">
                <ellipse cx="200" cy="180" rx="90" ry="42" fill="#0d0b09" stroke="#d4a75e" strokeWidth="2.5" />
                <rect x="110" y="140" width="180" height="40" fill="#14110e" stroke="#d4a75e" strokeWidth="2" />
                <ellipse cx="200" cy="140" rx="90" ry="40" fill="url(#waxClayGrad)" stroke="#fae7c9" strokeWidth="2" />
                <path d="M 160 135 C 170 120 220 120 235 138 C 240 148 200 155 175 145 Z" fill="#d4a75e" opacity="0.6" className="wax-melt-swirl" />
                <circle cx="195" cy="138" r="14" fill="#fae7c9" opacity="0.3" filter="blur(2px)" />
                <ellipse cx="200" cy="140" rx="84" ry="36" fill="none" stroke="rgba(212,167,94,0.5)" strokeWidth="1.5" strokeDasharray="6 4" />
              </g>
            </svg>

            <div className="canvas-badge-strip">
              <span className="live-pulse-dot" />
              <span>{isSimulating ? "WARMED & EMULSIFIED NATURAL CLAY" : "NATURAL BENTONITE & ORGANIC BEESWAX"}</span>
            </div>
          </div>
        );

      case "towel":
        return (
          <div className={`sensory-canvas canvas-towel ${isSimulating ? "steam-burst-active" : ""}`}>
            <svg viewBox="0 0 400 280" className="sensory-interactive-svg">
              <defs>
                <linearGradient id="towelFabric" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2c2822" />
                  <stop offset="50%" stopColor="#1c1915" />
                  <stop offset="100%" stopColor="#100e0b" />
                </linearGradient>
                <radialGradient id="steamWarmGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fae7c9" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#d4a75e" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g className="steam-cloud-group">
                <circle cx="200" cy="100" r="70" fill="url(#steamWarmGlow)" className="steam-halo" />
                <path className="steam-plume plume-1" d="M 150 140 Q 130 90 160 50 Q 185 20 160 5" fill="none" stroke="#fae7c9" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
                <path className="steam-plume plume-2" d="M 200 135 Q 225 80 195 45 Q 170 15 205 2" fill="none" stroke="#d4a75e" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
                <path className="steam-plume plume-3" d="M 250 140 Q 270 95 240 55 Q 220 25 245 8" fill="none" stroke="#fae7c9" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
                <path className="steam-plume plume-4" d="M 175 145 Q 155 105 180 70" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                <path className="steam-plume plume-5" d="M 225 145 Q 250 105 220 70" fill="none" stroke="#fae7c9" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              </g>

              <g className="towel-bundle">
                <rect x="110" y="145" width="180" height="75" rx="36" fill="url(#towelFabric)" stroke="#d4a75e" strokeWidth="2.5" />
                <line x1="140" y1="148" x2="140" y2="217" stroke="rgba(212,167,94,0.3)" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="170" y1="146" x2="170" y2="219" stroke="rgba(212,167,94,0.3)" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="200" y1="146" x2="200" y2="219" stroke="rgba(212,167,94,0.3)" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="230" y1="146" x2="230" y2="219" stroke="rgba(212,167,94,0.3)" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="260" y1="148" x2="260" y2="217" stroke="rgba(212,167,94,0.3)" strokeWidth="2" strokeDasharray="3 3" />
                <ellipse cx="280" cy="182" rx="16" ry="34" fill="#1b1814" stroke="#d4a75e" strokeWidth="2" />
                <path d="M 280 160 Q 290 182 280 204 Q 272 182 280 172" fill="none" stroke="#fae7c9" strokeWidth="2" />
                <circle cx="160" cy="182" r="9" fill="none" stroke="#d4a75e" strokeWidth="1" />
                <text x="160" y="186" fill="#d4a75e" fontSize="9" fontWeight="bold" textAnchor="middle">PR</text>
              </g>
            </svg>

            <div className="canvas-badge-strip">
              <span className="live-pulse-dot" />
              <span>{isSimulating ? "CALIBRATED 120°F EUCALYPTUS STEAM BURST" : "100% TURKISH COTTON AROMATHERAPY WRAP"}</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="tool-modal-overlay" onClick={onClose}>
      <div
        className="tool-sensory-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Header */}
        <div className="tool-modal-top-bar">
          <div className="modal-title-group">
            <span className="modal-kicker">01 / SENSORY BARBER ESSENTIALS</span>
            <span className="modal-index-counter">
              TOOL 0{currentIndex + 1} OF 0{allTools.length}
            </span>
          </div>

          <div className="modal-top-actions">
            <span className="esc-key-hint">[ESC] TO CLOSE</span>
            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close Sensory Tool Showcase"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Quick Tool Switcher Pills */}
        <div className="modal-pills-nav">
          {allTools.map((t) => (
            <button
              key={t.id}
              className={`modal-pill-tab ${t.id === tool.id ? "active" : ""}`}
              onClick={() => {
                onSelectTool(t.id);
                setIsSimulating(false);
              }}
            >
              <span className="pill-dot" />
              <span>{t.name}</span>
            </button>
          ))}
        </div>

        {/* Two-Column Editorial Popout Layout */}
        <div className="tool-modal-body-grid">
          {/* Left Column: Interactive Simulation Stage */}
          <div className="modal-stage-col">
            <div className="stage-header-row">
              <span className="stage-tag">{tool.tag}</span>
              <span className="stage-badge">{tool.badge}</span>
            </div>

            {/* Interactive Animated Canvas */}
            <div className="stage-canvas-wrap">
              {renderInteractiveStage()}
            </div>

            {/* Interactive Simulation Action Button */}
            <div className="stage-action-box">
              <button
                className={`sensory-trigger-btn ${isSimulating ? "active-trigger" : ""}`}
                onClick={triggerSensorySimulation}
              >
                <Sparkles size={16} className="gold-sparkle" />
                <span>
                  {isSimulating
                    ? tool.triggerActionText || "SENSORY SIMULATION ACTIVE..."
                    : tool.triggerBtnText || (`ACTIVATE ${tool.name.toUpperCase()} SENSATION`)}
                </span>
                <RotateCcw size={15} className={`trigger-spin ${isSimulating ? "spinning" : ""}`} />
              </button>
              <small className="trigger-hint">
                Tap to simulate live air, mist, or shear mechanics
              </small>
            </div>

            {/* Sensation Highlight Bar */}
            <div className="modal-sensation-bar">
              <div className="sensation-lead-icon">✦</div>
              <div className="sensation-content">
                <strong>IN-CHAIR SENSATION</strong>
                <p>"{tool.sensation}"</p>
              </div>
            </div>

            {/* Audio & Tactile Cue Indicator */}
            <div className="modal-sound-meter">
              <Volume2 size={16} className="sound-icon" />
              <div className="sound-bars">
                <span className={`audio-bar bar-1 ${isSimulating ? "dancing" : ""}`} />
                <span className={`audio-bar bar-2 ${isSimulating ? "dancing" : ""}`} />
                <span className={`audio-bar bar-3 ${isSimulating ? "dancing" : ""}`} />
                <span className={`audio-bar bar-4 ${isSimulating ? "dancing" : ""}`} />
                <span className={`audio-bar bar-5 ${isSimulating ? "dancing" : ""}`} />
              </div>
              <span className="sound-text">{tool.soundEffect}</span>
            </div>
          </div>

          {/* Right Column: 'Know More' Deep-Dive & Engineering */}
          <div className="modal-info-col">
            <div className="info-header">
              <h3 className="info-title">{tool.name}</h3>
              <h4 className="info-headline">{tool.headline}</h4>
            </div>

            {/* Philosophy & Craftsmanship */}
            <div className="info-philosophy-section">
              <h5 className="info-subheading">
                <ShieldCheck size={15} className="gold-icon" />
                THE ARTISAN DIFFERENCE
              </h5>
              <p className="info-desc-lead">{tool.deepPhilosophy || tool.desc}</p>
              {tool.whyWeUseIt && (
                <div className="why-box">
                  <strong>Why PR Men Dot Uses This:</strong>
                  <p>{tool.whyWeUseIt}</p>
                </div>
              )}
            </div>

            {/* 3 Technical Specifications */}
            {tool.specs && tool.specs.length > 0 && (
              <div className="info-specs-section">
                <h5 className="info-subheading">
                  <Sparkles size={15} className="gold-icon" />
                  TECHNICAL ARTISAN SPECIFICATIONS
                </h5>
                <div className="specs-grid">
                  {tool.specs.map((spec, i) => (
                    <div key={i} className="spec-card">
                      <span className="spec-label">{spec.label}</span>
                      <strong className="spec-value">{spec.value}</strong>
                      <small className="spec-sub">{spec.sub}</small>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Featured Services Featuring this Tool */}
            {tool.featuredServices && tool.featuredServices.length > 0 && (
              <div className="info-services-section">
                <h5 className="info-subheading">
                  <CheckCircle2 size={15} className="gold-icon" />
                  EXPERIENCE THIS IN OUR SIGNATURE SERVICES
                </h5>
                <div className="service-chips-row">
                  {tool.featuredServices.map((svc, idx) => (
                    <span key={idx} className="service-chip">
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions Row: Prev / Next & Book Ritual */}
            <div className="modal-bottom-actions">
              <div className="nav-cycle-btns">
                <button
                  className="cycle-nav-btn"
                  onClick={() => navigateTool(-1)}
                  title="Previous Tool"
                >
                  <ChevronLeft size={16} />
                  <span>Prev</span>
                </button>
                <button
                  className="cycle-nav-btn"
                  onClick={() => navigateTool(1)}
                  title="Next Tool"
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {onOpenBooking && (
                <button
                  className="modal-book-ritual-btn"
                  onClick={() => {
                    onOpenBooking(tool.bookingService || tool.name);
                    onClose();
                  }}
                >
                  <span>Reserve Chair with this Ritual</span>
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
