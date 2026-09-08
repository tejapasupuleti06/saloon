import React, { useState, useRef, useCallback } from "react";
import beforeImg from "../assets/before_messy.jpg";
import afterImg from "../assets/after_groomed.jpg";

export default function TransformationSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 3));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 3));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <section className="transformation section dark-section" id="transformation">
      <div className="transform-title">
        <h2>
          CUT.
          <br />
          <em>STYLE.</em>
          <br />
          DEFINE.
        </h2>
      </div>

      <div className="transform-stage">
        <div
          ref={containerRef}
          className={`transform-slider-wrap ${isDragging ? "is-dragging" : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPos)}
          aria-label="Interactive grooming transformation slider"
        >
          {/* Base Layer: Sharp haircut & sculpted beard shape */}
          <div className="transform-layer transform-layer-after">
            <img
              src={afterImg}
              alt="Groomed haircut and beard styling"
              draggable="false"
            />
          </div>

          {/* Top Layer: Messy hair & improper grooming (clipped) */}
          <div
            className="transform-layer transform-layer-before"
            style={{
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              WebkitClipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
            }}
          >
            <img
              src={beforeImg}
              alt="Messy hair and unkempt beard"
              draggable="false"
            />
          </div>

          {/* Vertical Golden Divider Line */}
          <div
            className="transform-divider-line"
            style={{ left: `${sliderPos}%` }}
          />

          {/* Luxury Draggable Handle with neutral drag chevrons (zero text, zero before/after symbols) */}
          <div
            className={`transform-drag-dial ${isDragging ? "is-active" : ""}`}
            style={{ left: `${sliderPos}%` }}
          >
            <div className="transform-dial-arrows">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                stroke="#fae7c9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 2L1 7L5 12" />
                <path d="M15 2L19 7L15 12" />
                <line x1="9" y1="3" x2="9" y2="11" stroke="#e5b96a" strokeWidth="1.5" />
                <line x1="11" y1="3" x2="11" y2="11" stroke="#e5b96a" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <p className="transform-note">
        The difference is in the details — the consultation, the scissor angle, and the master finishing touch.
      </p>
    </section>
  );
}
