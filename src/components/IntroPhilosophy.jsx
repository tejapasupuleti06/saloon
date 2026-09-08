import React, { useState, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw
} from "lucide-react";
import ToolSensoryModal from "./ToolSensoryModal";

export default function IntroPhilosophy({ onScrollTo, onOpenBooking }) {
  const [activeTool, setActiveTool] = useState(null);
  const [focusedToolId, setFocusedToolId] = useState(null);
  const cardRefs = useRef({});

  const salonTools = [
    {
      id: "shears",
      name: "Japanese Steel Shears",
      tag: "PRECISION HAND CRAFT",
      badge: "440C Cobalt Alloy",
      headline: "Hand-Honed Convex Shears vs. Machine Clippers",
      sensation: "The rhythmic, crisp snip of hand-honed steel",
      desc: "We don't use single all-purpose scissors. Our station features a bespoke bunch of hand-forged Japanese shears: 6-inch convex shears for sharp cutting lines, 30-tooth blending shears for seamless weight removal, and micro-curved shears for clean ear tapers.",
      craftDetail: "Honed to a surgical 45° convex angle for zero hair pulling, zero split ends, and featherlight point texturizing.",
      deepPhilosophy: "Most commercial salons use machine clippers for raw speed, which blunts hair ends horizontally and causes rough regrowth. We believe a bespoke hand-sheared cut gives hair natural movement, conforms to your cranial bone structure, and retains its shape for weeks without collapsing.",
      whyWeUseIt: "Hand-forged Takefu 440C cobalt alloy shears create a surgical 45-degree angle slice that prevents split ends, seals hair cuticle ends naturally, and creates soft organic feathering that grows out seamlessly over 4 to 6 weeks.",
      specs: [
        { label: "Steel Purity", value: "Takefu 440C", sub: "Cryogenic Vacuum Heat-Treated" },
        { label: "Blade Edge", value: "45° Convex Clam", sub: "Surgical Point-Shearing Detailing" },
        { label: "Rockwell Hardness", value: "61 HRC", sub: "Ultra-Durable Razor Edge Retention" }
      ],
      soundEffect: "✂️ Surgical Takefu shear snip (harmonic click)",
      triggerBtnText: "✂️ TRIGGER PRECISION SCISSOR SNIP",
      triggerActionText: "SNIPPING TAKEFU 440C CONVEX BLADES...",
      featuredServices: ["Master Haircut & Event Styling", "Gentlemen's Complete Care", "Kids Gentle Haircut"],
      bookingService: "Master Haircut & Event Styling",
      iconType: "shears"
    },
    {
      id: "dryer",
      name: "Ionic Thermal Blow Dryer",
      tag: "THERMAL SCULPTING",
      badge: "110,000 RPM Brushless",
      headline: "Controlled Tourmaline Heat & Volume Lock",
      sensation: "Warm targeted breeze lifting roots & sealing cuticles",
      desc: "A great haircut is perfected in the blow dry. Our high-torque ionic dryers emit tourmaline negative ions that seal hair cuticles, eliminate humidity frizz, and lock your quiff or crop into all-day natural shape.",
      craftDetail: "Equipped with precision directional nozzles that sculpt volume without heat damage or scalp irritation.",
      deepPhilosophy: "A cut is only as good as its thermal lock. Cheap salon hair dryers blast scorching, uncontrolled heat that blisters hair cuticles and leaves scalp stinging. Our digital brushless motor produces high-velocity airflow at a calibrated 57°C, neutralizing static with 20 million negative ions per cm³.",
      whyWeUseIt: "The micro-focused ionic airstream closes the microscopic scales of each hair shaft, reflecting natural light for editorial shine while lifting root follicles so your fade or textured crop stays elevated all day without stiff lacquer.",
      specs: [
        { label: "Motor Velocity", value: "110,000 RPM", sub: "Digital Brushless Jet Turbine" },
        { label: "Negative Ions", value: "20M ions/cm³", sub: "Neutralizes Humidity & Frizz" },
        { label: "Thermal Guard", value: "Constant 57°C", sub: "Zero Scalp Burning or Follicle Stress" }
      ],
      soundEffect: "💨 High-frequency jet airflow purr (74 dB whisper)",
      triggerBtnText: "💨 BLOW HIGH-VELOCITY AIR BLAST",
      triggerActionText: "BLASTING 110,000 RPM IONIC AIRFLOW...",
      featuredServices: ["Executive Blowdry & Styling", "Royal Executive Package", "Keratin Smoothing Finish"],
      bookingService: "Executive Grooming Package",
      iconType: "dryer"
    },
    {
      id: "spray",
      name: "Continuous Mist Water Spray",
      tag: "HYDRATION & GLIDE",
      badge: "0.3mm Ultra-Fine Dispersion",
      headline: "Pressurized Micro-Mist Hydration System",
      sensation: "Ultra-fine cool mist prepping hair for the razor",
      desc: "Forget clumsy dripping squeeze bottles. We use continuous pressurized mist bottles with purified water and cooling aloe vera that evenly dampen hair for razor-accurate sectioning and effortless comb parting.",
      craftDetail: "Distributes micro-fine droplets that hydrate hair fibers without soaking your collar or running down your neck.",
      deepPhilosophy: "Standard squirt bottles drench the client unevenly, creating cold puddles that run down your neck and soak your collar. Our pressurized 0.3mm dispersal system atomizes purified water and aloe vera into a suspended cloud of micro-mist.",
      whyWeUseIt: "Even hydration allows our Japanese shears to glide effortlessly through hair strands without hair tugging or uneven cutting tension. The aloe vera extract calms the scalp and prepares the hair shaft for surgical sectioning.",
      specs: [
        { label: "Droplet Micron", value: "0.3mm Nozzle", sub: "Suspended Micro-Droplet Mist" },
        { label: "Spray Duration", value: "1.25 Sec / Pull", sub: "Aerosol-Free Continuous Flow" },
        { label: "Infusion Base", value: "Aloe Vera + H₂O", sub: "Calming Scalp Botanicals" }
      ],
      soundEffect: "💦 Pressurized whisper-hiss (aerosol-free continuous mist)",
      triggerBtnText: "💦 SPRINKLE FRESH WATER MIST",
      triggerActionText: "SPRINKLING CONTINUOUS 0.3mm ALOE MIST...",
      featuredServices: ["All Precision Haircuts", "Beard Wet Line-ups", "Scalp Refresh Treatment"],
      bookingService: "Gentlemen's Complete Care",
      iconType: "spray"
    },
    {
      id: "trimmers",
      name: "Zero-Gap Magnetic Trimmers",
      tag: "SURGICAL ARCHITECTURE",
      badge: "7,200 RPM High-Torque",
      headline: "Skeleton T-Blade Precision Architecture",
      sensation: "Low-hum vibration carving crisp edges & skin fades",
      desc: "Powered by cordless magnetic motors delivering 7,200 strokes per minute, our skeleton T-blade detailers and dual-foil shavers carve razor-sharp temple arches, beard boundaries, and skin-tight necklines.",
      craftDetail: "Equipped with Black Diamond Carbon blades that stay cool during long trims, providing irritation-free zero-gap precision.",
      deepPhilosophy: "Standard consumer trimmers snag on thick hair and generate friction heat against tender neck skin, causing razor burn. Our stations feature skeleton linear magnetic motor detailers calibrated to a true 0.1mm zero-gap flush.",
      whyWeUseIt: "Coated with Diamond-Like Carbon (DLC), the cutting teeth oscillate at 7,200 strokes per minute while operating 40% cooler. This allows our barbers to sculpt surgical hairlines, razor-sharp temple arches, and skin-tight fades with zero razor bumps.",
      specs: [
        { label: "Motor Torque", value: "7,200 SPM", sub: "High-Velocity Magnetic Linear Power" },
        { label: "Blade Gap", value: "0.1mm True Flush", sub: "Zero-Gap Irritation Free Alignment" },
        { label: "Coating", value: "Black DLC Carbon", sub: "40% Cooler Skin Contact Temp" }
      ],
      soundEffect: "⚡ Low-frequency magnetic hum & crisp edge slice",
      triggerBtnText: "⚡ ENGAGE 7,200 RPM MOTOR",
      triggerActionText: "POWERING MAGNETIC LINEAR MOTOR...",
      featuredServices: ["Youth Drop Skin Fades", "Beard Sculpting & Detailing", "Razor Hairline Art"],
      bookingService: "Beard Sculpting & Line-up",
      iconType: "trimmers"
    },
    {
      id: "wax",
      name: "Matte Clay & Styling Wax",
      tag: "ALL-DAY DEFINITION",
      badge: "Bentonite & Organic Beeswax",
      headline: "Pliable Natural Hold & Cedarwood Aroma",
      sensation: "Warm cedarwood aroma & touchable matte texture",
      desc: "The finishing touch that defines your presence. We warm natural styling clay and organic beeswax pomade between our palms to emulsify natural argan oils, giving your haircut flexible all-day hold with zero greasy shine.",
      craftDetail: "Washes out clean with plain water. Enriched with cedarwood, amber, and bentonite clay for a textured, thicker hair appearance.",
      deepPhilosophy: "Supermarket hair gels suffocate scalp pores with synthetic petroleum silicones, causing dandruff and artificial helmet hair. We formulate our styling clay with natural volcanic bentonite and organic beeswax enriched with cedarwood, amber, and argan oils.",
      whyWeUseIt: "Hand-warmed between the barber's palms, it coats each strand with invisible textured volume, giving you touchable memory you can reshape all day long, and rinses out completely in a single warm water wash.",
      specs: [
        { label: "Hold Rating", value: "Level 8 / 10", sub: "Pliable & Re-shapeable All Day" },
        { label: "Finish Quality", value: "100% Matte", sub: "Zero Unwanted Gloss or Greasy Film" },
        { label: "Base Origin", value: "Bentonite Clay", sub: "Natural Volcanic Mineral Volume" }
      ],
      soundEffect: "🏺 Warm palm emulsifying & fragrant release",
      triggerBtnText: "🏺 WARM & EMULSIFY CLAY",
      triggerActionText: "EMULSIFYING NATURAL BENTONITE & OILS...",
      featuredServices: ["Textured Crop Finishing", "Executive Quiff & Pompadour", "Beard Balm Sculpt"],
      bookingService: "Master Haircut & Event Styling",
      iconType: "wax"
    },
    {
      id: "towel",
      name: "Eucalyptus Hot Steam Towel",
      tag: "RESTORATIVE RITUAL",
      badge: "120°F Turkish Cotton Steam",
      headline: "Aromatherapy Hot Steam Facial Wrap",
      sensation: "120°F soothing steam melting away daily tension",
      desc: "The heartbeat of traditional barbershop luxury. Plush 100% Turkish cotton towels infused with eucalyptus and lavender steam wrapped around your face to soften coarse beard whiskers, open pores, and clear mental fatigue.",
      craftDetail: "Softens coarse hair follicles for a frictionless straight-razor shave while releasing neck and facial tension.",
      deepPhilosophy: "More than skin preparation, the hot towel wrap is a sensory sanctuary. We infuse 100% long-staple Turkish cotton towels with organic eucalyptus and lavender botanicals, calibrated to a therapeutic 120°F (49°C).",
      whyWeUseIt: "When wrapped over your facial contours, the moist herbal heat softens coarse beard whiskers by 65% for frictionless single-stroke shaving, opens pores for detoxifying face scrubs, and soothes eye strain and mental fatigue.",
      specs: [
        { label: "Calibrated Heat", value: "120°F (49°C)", sub: "Therapeutic Facial Muscle Relaxation" },
        { label: "Cotton Grade", value: "600 GSM", sub: "100% Ring-Spun Long-Staple Turkish" },
        { label: "Aromatics", value: "Pure Eucalyptus", sub: "Opens Sinuses & Clears Mind" }
      ],
      soundEffect: "🧖 Soothing steam warmth & deep sigh of relaxation",
      triggerBtnText: "🧖 RELEASE 120°F STEAM WRAP",
      triggerActionText: "RELEASING 120°F EUCALYPTUS STEAM CLOUDS...",
      featuredServices: ["Classic Hot Towel Shave", "Royal Executive Package", "Anti-Fatigue Face Spa"],
      bookingService: "Classic Hot Towel Shave",
      iconType: "towel"
    }
  ];

  const activeToolData = salonTools.find((t) => t.id === activeTool);

  const handleCardSelect = (toolId, shouldScroll = true) => {
    if (focusedToolId === toolId) {
      // If already focused, clicking again opens the sensory lab modal
      setActiveTool(toolId);
    } else {
      setFocusedToolId(toolId);
      if (shouldScroll && cardRefs.current[toolId]) {
        cardRefs.current[toolId].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }
    }
  };

  const handlePrevTool = () => {
    const currentIndex = salonTools.findIndex((t) => t.id === focusedToolId);
    const prevIndex = currentIndex <= 0 ? salonTools.length - 1 : currentIndex - 1;
    handleCardSelect(salonTools[prevIndex].id);
  };

  const handleNextTool = () => {
    const currentIndex = salonTools.findIndex((t) => t.id === focusedToolId);
    const nextIndex = currentIndex < 0 || currentIndex >= salonTools.length - 1 ? 0 : currentIndex + 1;
    handleCardSelect(salonTools[nextIndex].id);
  };

  const renderToolSvg = (type) => {
    switch (type) {
      case "shears":
        return (
          <svg viewBox="0 0 64 64" className="tool-svg svg-shears">
            <g className="shear-blade-left">
              <circle cx="20" cy="18" r="7" fill="none" stroke="#f7e4c3" strokeWidth="2" />
              <path d="M24 23 L32 32 L22 56" stroke="#e5c388" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </g>
            <g className="shear-blade-right">
              <circle cx="44" cy="18" r="7" fill="none" stroke="#f7e4c3" strokeWidth="2" />
              <path d="M40 23 L32 32 L42 56" stroke="#e5c388" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </g>
            <circle cx="32" cy="32" r="3" fill="#f7e4c3" stroke="#bda06c" strokeWidth="1" />
            <path d="M28 30 L16 48 M36 30 L48 48" stroke="rgba(229,195,136,0.35)" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );
      case "dryer":
        return (
          <svg viewBox="0 0 64 64" className="tool-svg svg-dryer">
            <path d="M12 20 L32 20 C38 20 42 24 42 30 C42 36 38 40 32 40 L12 40 Z" fill="#161922" stroke="#e5c388" strokeWidth="2" />
            <path d="M42 26 L52 24 L52 36 L42 34 Z" fill="#202533" stroke="#f7e4c3" strokeWidth="1.5" />
            <path d="M22 40 L26 56 L34 54 L30 40 Z" fill="#0f1116" stroke="#e5c388" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="28" cy="48" r="2" fill="#e5c388" />
            <path className="svg-wind-1" d="M55 24 Q60 22 64 25" stroke="#f7e4c3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path className="svg-wind-2" d="M55 30 Q61 30 66 30" stroke="#e5c388" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path className="svg-wind-3" d="M55 36 Q60 38 64 35" stroke="#f7e4c3" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );
      case "spray":
        return (
          <svg viewBox="0 0 64 64" className="tool-svg svg-spray">
            <rect x="22" y="30" width="20" height="28" rx="4" fill="#1e2330" stroke="#e5c388" strokeWidth="2" />
            <rect x="25" y="35" width="14" height="18" rx="2" fill="none" stroke="rgba(229, 195, 136, 0.4)" strokeWidth="1" />
            <path d="M26 30 L26 22 L38 22 L38 30 Z" fill="#161922" stroke="#e5c388" strokeWidth="1.5" />
            <path d="M30 22 L30 15 L44 15 L44 19 L36 21" fill="#0f1116" stroke="#f7e4c3" strokeWidth="2" />
            <path d="M34 18 C31 22 28 26 27 28" stroke="#e5c388" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="44" y="15.5" width="4" height="3" rx="0.5" fill="#e5c388" />
            <circle className="svg-drop-1" cx="53" cy="14" r="1.5" fill="#f7e4c3" />
            <circle className="svg-drop-2" cx="57" cy="17" r="2" fill="#e5c388" />
            <circle className="svg-drop-3" cx="54" cy="21" r="1.5" fill="#f7e4c3" />
          </svg>
        );
      case "trimmers":
        return (
          <svg viewBox="0 0 64 64" className="tool-svg svg-trimmer">
            <path d="M24 20 L22 48 C22 52 26 56 32 56 C38 56 42 52 42 48 L40 20 Z" fill="#12141a" stroke="#e5c388" strokeWidth="2" />
            <path d="M18 14 L46 14 L42 20 L22 20 Z" fill="#f7e4c3" stroke="#bda06c" strokeWidth="1.5" />
            <line x1="22" y1="14" x2="22" y2="17" stroke="#111" strokeWidth="1" />
            <line x1="26" y1="14" x2="26" y2="17" stroke="#111" strokeWidth="1" />
            <line x1="30" y1="14" x2="30" y2="17" stroke="#111" strokeWidth="1" />
            <line x1="34" y1="14" x2="34" y2="17" stroke="#111" strokeWidth="1" />
            <line x1="38" y1="14" x2="38" y2="17" stroke="#111" strokeWidth="1" />
            <line x1="42" y1="14" x2="42" y2="17" stroke="#111" strokeWidth="1" />
            <rect x="29" y="36" width="6" height="10" rx="3" fill="#e5c388" />
            <line x1="26" y1="26" x2="38" y2="26" stroke="rgba(229,195,136,0.3)" strokeWidth="1.5" />
            <line x1="26" y1="30" x2="38" y2="30" stroke="rgba(229,195,136,0.3)" strokeWidth="1.5" />
          </svg>
        );
      case "wax":
        return (
          <svg viewBox="0 0 64 64" className="tool-svg svg-wax">
            <ellipse cx="32" cy="42" rx="22" ry="12" fill="#161922" stroke="#e5c388" strokeWidth="2" />
            <ellipse cx="32" cy="38" rx="22" ry="10" fill="#202533" stroke="#f7e4c3" strokeWidth="1.5" />
            <path d="M12 28 C12 22 21 17 32 17 C43 17 52 22 52 28 C52 34 43 39 32 39 C21 39 12 34 12 28 Z" fill="#0f1116" stroke="#e5c388" strokeWidth="2" />
            <circle cx="32" cy="28" r="6" fill="#e5c388" />
            <circle cx="32" cy="28" r="2.5" fill="#0f1116" />
          </svg>
        );
      case "towel":
        return (
          <svg viewBox="0 0 64 64" className="tool-svg svg-towel">
            <rect x="16" y="34" width="34" height="18" rx="7" fill="#1e222d" stroke="#e5c388" strokeWidth="2" />
            <ellipse cx="50" cy="43" rx="4" ry="9" fill="#2a303f" stroke="#e5c388" strokeWidth="1.5" />
            <ellipse cx="50" cy="43" rx="1.5" ry="5" fill="#9ea4b2" />
            <path d="M26 34 C26 38 29 44 34 44 C39 44 42 38 42 34" fill="none" stroke="#e5c388" strokeWidth="1.5" />
            <path className="svg-steam-1" d="M24 28 Q22 22 26 16 Q30 10 26 6" fill="none" stroke="#f7e4c3" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-steam-2" d="M34 26 Q38 20 34 14 Q30 8 34 4" fill="none" stroke="#e5c388" strokeWidth="2" strokeLinecap="round" />
            <path className="svg-steam-3" d="M44 28 Q42 22 46 16 Q50 10 46 6" fill="none" stroke="#f7e4c3" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="intro" className="intro section">
      {/* Main Headline & Philosophy Layout */}
      <div className="intro-layout">
        <div>
          <h2>
            Not just a haircut.
            <br />
            <em>A feeling.</em>
          </h2>
          <div className="intro-badge-pill">
            <Sparkles size={13} className="gold-icon" />
            <span>THE 6 SENSORY BARBER ESSENTIALS</span>
          </div>
        </div>

        <div className="intro-text-col">
          <p className="lead">
            We believe a good salon visit should leave you feeling more like yourself — only sharper, lighter, and completely revitalized.
          </p>
          <p>
            It is the sensory symphony of a warm eucalyptus steam towel, the rhythmic snip of hand-honed Japanese shears, fine cool water mist, and the hum of magnetic motor clippers that turns routine grooming into a restorative ritual.
          </p>
          <div className="intro-action-btns">
            <button
              className="text-btn"
              onClick={() => onScrollTo ? onScrollTo("menu-hub") : null}
            >
              EXPLORE SERVICES <ArrowRight size={17} />
            </button>
            {onOpenBooking && (
              <button
                className="intro-book-trigger"
                onClick={() => onOpenBooking("Gentlemen's Complete Care")}
              >
                BOOK A VISIT
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sensory Salon Tools: Dual Mode (Desktop: Old Overlapping Deck, Mobile: Skiper48 Swipe) */}
      <div className="salon-tools-section">
        <div className="tools-section-header">
          <div>
            <h3 className="tools-title">The Tools Behind The Feeling</h3>
            <p className="tools-subtitle">
              Every chair at PR Men Dot is an artisan station equipped with precision barbering gear. Click any tool to spotlight it — surrounding stations blur into the background. Click again to pop out the live sensory lab:
            </p>
          </div>
        </div>

        {/* Quick Station Navigation Pills */}
        <div className="tools-deck-nav-bar">
          <div className="tools-pills-row">
            {salonTools.map((tool) => {
              const isFocused = focusedToolId === tool.id;
              const toolIcons = {
                shears: "✂",
                dryer: "💨",
                spray: "💧",
                trimmer: "⚡",
                wax: "🏺",
                towel: "🧖"
              };
              return (
                <button
                  key={tool.id}
                  type="button"
                  className={`tool-deck-pill ${isFocused ? "active" : ""}`}
                  onClick={() => handleCardSelect(tool.id)}
                >
                  <span className="pill-emoji">{toolIcons[tool.iconType]}</span>
                  <span className="pill-name">
                    {tool.name.split(" ")[0]} {tool.name.split(" ")[1] || ""}
                  </span>
                  {isFocused && <span className="pill-glow-dot" />}
                </button>
              );
            })}
          </div>

          {focusedToolId && (
            <button
              type="button"
              className="tool-reset-deck-btn"
              onClick={() => setFocusedToolId(null)}
              title="Unblur all cards and view overlaying deck"
            >
              <RotateCcw size={12} />
              <span>SHOW ALL DECK</span>
            </button>
          )}
        </div>

        {/* Overlapping Cascading Deck Stage */}
        <div className="tools-stacked-stage">
          {/* Side navigation arrows */}
          <button
            type="button"
            className="deck-nav-arrow deck-prev-arrow"
            onClick={handlePrevTool}
            aria-label="Previous station"
            title="Previous station"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            className="deck-nav-arrow deck-next-arrow"
            onClick={handleNextTool}
            aria-label="Next station"
            title="Next station"
          >
            <ChevronRight size={20} />
          </button>

          <div className={`tools-stacked-deck-scroller ${focusedToolId ? "tools-deck-has-focus" : ""}`}>
            <div className="tools-stacked-deck">
              {salonTools.map((tool, idx) => {
                const isFocused = focusedToolId === tool.id;
                const isBlurred = focusedToolId !== null && !isFocused;

                return (
                  <div
                    key={tool.id}
                    ref={(el) => (cardRefs.current[tool.id] = el)}
                    className={`salon-tool-card stacked-tool-card ${
                      isFocused ? "is-focused selected" : ""
                    } ${isBlurred ? "is-blurred" : ""}`}
                    style={{
                      zIndex: isFocused ? 50 : idx + 1
                    }}
                    onClick={() => handleCardSelect(tool.id)}
                    title={
                      isFocused
                        ? `Click to pop out ${tool.name} interactive lab`
                        : `Click to highlight ${tool.name} and blur remaining cards`
                    }
                  >
                    {/* Visual Focus Beacon */}
                    {isFocused && (
                      <div className="tool-focused-beacon">
                        <Sparkles size={11} />
                        <span>SPOTLIGHTED • CLICK TO POP OUT</span>
                      </div>
                    )}

                    <div className="tool-card-top">
                      <span className="tool-tag">{tool.tag}</span>
                      <span className="tool-badge-pill">{tool.badge}</span>
                    </div>

                    {/* Animated Tool Icon Container */}
                    <div className="tool-icon-stage">
                      <div className="tool-icon-circle">
                        {renderToolSvg(tool.iconType)}
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="tool-name">{tool.name}</h4>
                    <div className="tool-sensation-bar">
                      <span className="sensation-dot" />
                      <span className="sensation-text">{tool.sensation}</span>
                    </div>

                    <p className="tool-desc">{tool.desc}</p>

                    <div className="tool-craft-spec">
                      <CheckCircle2 size={13} className="gold-icon flex-shrink-0" />
                      <span>{tool.craftDetail}</span>
                    </div>

                    {/* Interactive Action Area */}
                    {isFocused ? (
                      <div className="tool-card-focused-actions">
                        <button
                          type="button"
                          className="tool-launch-modal-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTool(tool.id);
                          }}
                        >
                          <span>LAUNCH SENSORY LAB</span>
                          <ArrowRight size={14} />
                        </button>
                        <span className="tool-sound-preview-chip">
                          {tool.soundEffect}
                        </span>
                      </div>
                    ) : (
                      <div className="tool-card-bottom-row">
                        <div className="tool-sound-cue-inline">
                          <small>{tool.soundEffect}</small>
                        </div>
                        <div className="tool-card-pop-trigger">
                          <span>{isBlurred ? "FOCUS" : "EXPLORE"}</span>
                          <ArrowRight size={12} />
                        </div>
                      </div>
                    )}

                    {/* Subtle Click-to-Focus Overlay for blurred cards */}
                    {isBlurred && (
                      <div className="tool-card-tap-cue">
                        <span>TAP TO BRING FORWARD</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Deck Footnote Cue */}
        <div className="tools-deck-footnote">
          <span>💡 <strong>Interactive Deck:</strong> Click any card to highlight & blur the rest • Click active card to launch live blowing air, mist, and scissors animation</span>
        </div>
      </div>

      {/* Dedicated Sensory Lab Popout Modal */}
      {activeToolData && (
        <ToolSensoryModal
          tool={activeToolData}
          onClose={() => setActiveTool(null)}
          onSelectTool={(id) => setActiveTool(id)}
          allTools={salonTools}
          onOpenBooking={onOpenBooking}
        />
      )}
    </section>
  );
}
