import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteData } from "../data/salonData";

export default function ScissorsLoader({ onComplete }) {
  const containerRef = useRef(null);
  const leftHalfRef = useRef(null);
  const rightHalfRef = useRef(null);
  const scissorsRef = useRef(null);
  const leftBladeRef = useRef(null);
  const rightBladeRef = useRef(null);
  const brandRef = useRef(null);

  useEffect(() => {
    // Explicitly lock initial scissors horizontal centering and blade pivot origins
    gsap.set(scissorsRef.current, { x: 0 });
    gsap.set([leftBladeRef.current, rightBladeRef.current], {
      transformOrigin: "50px 50px",
      svgOrigin: "50 50"
    });

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // 1. Initial brand pulse
    tl.fromTo(
      brandRef.current,
      { opacity: 0, scale: 0.88, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );

    // 2. Rapid snipping blades rotating strictly around pivot (50, 50)
    const snipTl = gsap.timeline({ repeat: -1, yoyo: true });
    snipTl
      .fromTo(
        leftBladeRef.current,
        { rotation: 1, transformOrigin: "50px 50px", svgOrigin: "50 50" },
        { rotation: -13, transformOrigin: "50px 50px", svgOrigin: "50 50", duration: 0.08, ease: "power1.inOut" }
      )
      .fromTo(
        rightBladeRef.current,
        { rotation: -1, transformOrigin: "50px 50px", svgOrigin: "50 50" },
        { rotation: 13, transformOrigin: "50px 50px", svgOrigin: "50 50", duration: 0.08, ease: "power1.inOut" },
        0
      );

    // 3. Move scissors smoothly down the center seam
    tl.fromTo(
      scissorsRef.current,
      { y: "-110px", opacity: 1 },
      {
        y: "106vh",
        duration: 1.4,
        ease: "power1.inOut"
      },
      "-=0.05"
    );

    // Fade brand mark as scissors cut through center
    tl.to(
      brandRef.current,
      { opacity: 0, scale: 0.94, duration: 0.3, ease: "power2.in" },
      "-=0.9"
    );

    // 4. CUT COMPLETE: Both halves split apart like doors / parted curtain!
    tl.to(
      leftHalfRef.current,
      {
        xPercent: -101,
        rotate: -1.2,
        duration: 0.85,
        ease: "power3.inOut"
      },
      "-=0.25"
    );

    tl.to(
      rightHalfRef.current,
      {
        xPercent: 101,
        rotate: 1.2,
        duration: 0.85,
        ease: "power3.inOut"
      },
      "<" // Start simultaneously with left half
    );

    tl.to(
      scissorsRef.current,
      { opacity: 0, duration: 0.15, ease: "power2.in" },
      "-=0.4"
    );

    // Safety fallback: Guarantee completion even if background tab throttles requestAnimationFrame
    const safetyTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2400);

    return () => {
      clearTimeout(safetyTimer);
      tl.kill();
      snipTl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="scissors-loader-container"
      onClick={() => onComplete && onComplete()}
      title="Click anywhere to skip directly into site"
      style={{ cursor: "pointer" }}
    >
      {/* Left Screen Half (ends at exact 50% screen width with golden seam edge) */}
      <div ref={leftHalfRef} className="loader-half loader-half-left">
        <div className="loader-half-content">
          <span className="half-watermark">PR</span>
        </div>
      </div>

      {/* Right Screen Half (starts at exact 50% screen width) */}
      <div ref={rightHalfRef} className="loader-half loader-half-right">
        <div className="loader-half-content">
          <span className="half-watermark">MEN DOT</span>
        </div>
      </div>

      {/* Centered Brand Pre-Cut Badge */}
      <div ref={brandRef} className="loader-center-brand">
        <div className="loader-brand-circle">
          <span>PR</span>
        </div>
        <h2 className="loader-brand-title">{siteData.name}</h2>
        <p className="loader-brand-sub">{siteData.subtitle}</p>
        <span className="loader-tagline">CRAFTING PERFECTION...</span>
      </div>

      {/* Animated Barber Scissors - Aligned exactly down the 50% centerline */}
      <div ref={scissorsRef} className="traveling-scissors">
        <svg
          viewBox="0 0 100 120"
          className="cutting-scissors-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bladeGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7e4c3" />
              <stop offset="45%" stopColor="#e5c388" />
              <stop offset="100%" stopColor="#bda06c" />
            </linearGradient>
            <linearGradient id="handleSteel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#c8cdd8" />
              <stop offset="100%" stopColor="#636978" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#e5c388" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Left Arm: Left Handle (cx=34) + Right-cutting Blade (edge at X=50) */}
          <g ref={leftBladeRef} id="left-arm">
            {/* Scissor Finger Loop */}
            <circle
              cx="34"
              cy="22"
              r="13"
              fill="none"
              stroke="url(#handleSteel)"
              strokeWidth="3.5"
            />
            {/* Classic Barber Tang / Finger Rest */}
            <path
              d="M 21 21 C 18 17, 16 11, 20 8"
              fill="none"
              stroke="url(#handleSteel)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Left Shank curving into pivot */}
            <path
              d="M 36 34 C 40 42, 45 47, 50 50"
              stroke="url(#handleSteel)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Cutting Blade (Straight edge at X=50, curves out symmetrically to right) */}
            <path
              d="M 50 50 L 50 112 Q 56 82 50 50 Z"
              fill="url(#bladeGold)"
              stroke="#f7e4c3"
              strokeWidth="0.8"
              filter="url(#goldGlow)"
            />
          </g>

          {/* Right Arm: Right Handle (cx=66) + Left-cutting Blade (edge at X=50) */}
          <g ref={rightBladeRef} id="right-arm">
            {/* Scissor Thumb Loop */}
            <circle
              cx="66"
              cy="22"
              r="13"
              fill="none"
              stroke="url(#handleSteel)"
              strokeWidth="3.5"
            />
            {/* Right Shank curving into pivot */}
            <path
              d="M 64 34 C 60 42, 55 47, 50 50"
              stroke="url(#handleSteel)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Cutting Blade (Straight edge at X=50, curves out symmetrically to left) */}
            <path
              d="M 50 50 L 50 112 Q 44 82 50 50 Z"
              fill="url(#bladeGold)"
              stroke="#f7e4c3"
              strokeWidth="0.8"
              filter="url(#goldGlow)"
            />
          </g>

          {/* Golden Pivot Screw (Exact center axis at 50, 50) */}
          <circle cx="50" cy="50" r="4.5" fill="#f7e4c3" stroke="#bda06c" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="1.5" fill="#161922" />
        </svg>

        <div className="cutting-spark-glow" />
      </div>
    </div>
  );
}
