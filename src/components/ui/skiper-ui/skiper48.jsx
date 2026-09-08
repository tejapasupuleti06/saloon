import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Volume2
} from "lucide-react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { cn } from "../../../lib/utils";

/**
 * Skiper48 - Card swipe carousel with 3D stacking effect and gesture controls
 * Adapted from @skiper-ui/skiper48 for PR Men Dot Salon Artisan Barber Tools
 */
export default function Skiper48Cards({
  tools = [],
  activeIndex = 0,
  onIndexChange,
  onLaunchModal,
  renderToolSvg,
  className
}) {
  const swiperRef = useRef(null);

  // Sync external activeIndex (e.g. from navigation pills) to swiper
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("skiper48-stage relative w-full flex flex-col items-center", className)}
    >
      {/* 3D Cards Swiper Container */}
      <div className="skiper48-cards-wrap relative w-full flex items-center justify-center">
        {/* Navigation Arrow Left */}
        <button
          type="button"
          className="skiper-nav-btn skiper-prev-btn"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous card"
          title="Previous station"
        >
          <ChevronLeft size={22} />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect="cards"
          grabCursor={true}
          cardsEffect={{
            slideShadows: true,
            perSlideRotate: 3.5,
            perSlideOffset: 12
          }}
          observer={true}
          observeParents={true}
          modules={[EffectCards, Navigation, Pagination]}
          onSlideChange={(swiper) => {
            if (onIndexChange) onIndexChange(swiper.activeIndex);
          }}
          className="skiper48-swiper"
        >
          {tools.map((tool, idx) => {
            const isCurrent = activeIndex === idx;

            return (
              <SwiperSlide key={tool.id} className="skiper-card-slide">
                <div
                  className={cn(
                    "skiper-tool-card",
                    isCurrent && "is-active-card"
                  )}
                  onClick={() => onLaunchModal && onLaunchModal(tool.id)}
                  title={`Click to open ${tool.name} interactive sensory lab`}
                >
                  {/* Top Status Row */}
                  <div className="tool-card-top">
                    <span className="tool-tag">{tool.tag}</span>
                    <span className="tool-badge-pill">{tool.badge}</span>
                  </div>

                  {/* 3D Tool Icon Display */}
                  <div className="tool-icon-stage">
                    <div className="tool-icon-circle">
                      {renderToolSvg ? renderToolSvg(tool.iconType) : null}
                    </div>
                  </div>

                  {/* Tool Identity & Sensation */}
                  <h4 className="tool-name">{tool.name}</h4>
                  <div className="tool-sensation-bar">
                    <span className="sensation-dot" />
                    <span className="sensation-text">{tool.sensation}</span>
                  </div>

                  {/* Punchy Description */}
                  <p className="tool-desc">{tool.desc}</p>

                  {/* Craft Spec Pill */}
                  <div className="tool-craft-spec">
                    <CheckCircle2 size={13} className="gold-icon flex-shrink-0" />
                    <span>{tool.craftDetail}</span>
                  </div>

                  {/* Sound & Sensory Action Row */}
                  <div className="skiper-card-action-bar">
                    <div className="skiper-sound-preview">
                      <Volume2 size={12} className="gold-icon" />
                      <span>{tool.soundEffect}</span>
                    </div>

                    <button
                      type="button"
                      className="skiper-launch-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onLaunchModal) onLaunchModal(tool.id);
                      }}
                      title="Open full interactive lab & sound test"
                    >
                      <Sparkles size={12} />
                      <span>SENSORY LAB</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                  {/* Subtle Swipe / Drag Indicator at bottom */}
                  <div className="skiper-card-swipe-cue">
                    <span>SWIPE OR DRAG TO SHUFFLE DECK ↔</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          className="skiper-nav-btn skiper-next-btn"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next card"
          title="Next station"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Interactive Deck Hint */}
      <div className="skiper-deck-indicator">
        <span className="deck-counter-badge">
          CARD {activeIndex + 1} OF {tools.length}
        </span>
        <span className="deck-gesture-hint">
          👆 Swipe left or right • Drag to peel card • Tap to test audio & specs
        </span>
      </div>
    </motion.div>
  );
}
