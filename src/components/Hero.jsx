import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowDownRight, ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { siteData, gallery } from "../data/salonData";
import salonHeroInterior from "../assets/salon_hero_interior.jpg";
import satishPhoto from "../assets/satish_founder.jpg";

export default function Hero({ onOpenBooking, onScrollTo, onOpenServices, onOpenPackages }) {
  const heroTools = useRef([]);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Gentle floating animation for background barber tools
    const ctx = gsap.context(() => {
      heroTools.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: i % 2 ? -10 : 12,
            rotation: i % 2 ? -5 : 5,
            duration: 2.4 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      
      {/* Topline location & call bar */}
      <div className="hero-topline">
        <span className="topline-item">{siteData.established}</span>
        <span className="topline-sep">◆</span>
        <span className="topline-item">{siteData.location}</span>
        <span className="topline-sep">◆</span>
        <a href={siteData.telLink} className="hero-phone-link" title="Call Salon">
          <Phone size={13} /> <span>{siteData.displayPhone}</span>
        </a>
      </div>

      <div className="hero-content">
        {/* Salon Tagline Pill */}
        <div className="hero-copy animate-fade-in-1">
          <Sparkles size={14} className="hero-copy-icon" />
          <span>{siteData.tagline}</span>
        </div>

        {/* Main Brand Title in Luminous Gold */}
        <h1 className="hero-title animate-fade-in-2">
          <span className="line text-gold-light">YOUR STYLE.</span>
          <span className="line text-gold-rich">YOUR STORY.</span>
        </h1>

        {/* Clear High-Legibility Description */}
        <p className="hero-description animate-fade-in-3">
          A modern grooming haven in Madhurawada for precision fades, tailored beard crafts, skin therapy, and timeless self-care — crafted for every generation.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions animate-fade-in-4">
          <button className="primary hero-primary-btn" onClick={onOpenServices}>
            EXPLORE SERVICES <ArrowRight size={16} />
          </button>
          <button className="ghost hero-ghost-btn" onClick={onOpenBooking}>
            RESERVE CHAIR
          </button>
          <a
            href={`${siteData.whatsappLink}?text=${encodeURIComponent("Hi PR Men Dot, I would like to inquire about booking an appointment.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-quick-btn"
          >
            <MessageCircle size={16} />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>

      {/* Floating Barber Tools */}
      <div className="hero-tools">
        <div ref={(el) => (heroTools.current[0] = el)} className="tool-floating tool-scissors" title="Barber Scissors">
          ✂
        </div>
        <div ref={(el) => (heroTools.current[1] = el)} className="tool-floating tool-comb" title="Styling Comb">
          ≋
        </div>
        <div ref={(el) => (heroTools.current[2] = el)} className="tool-floating tool-clip" title="Precision Clipper">
          ◈
        </div>
      </div>

      {/* 3D Cylindrical Flip Card (Shop Photo <-> Owner Satish) */}
      <div
        className={`hero-cylinder-stage ${isFlipped ? "is-flipped" : ""}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => setIsFlipped((prev) => !prev)}
        title="Hover or click to meet founder Satish"
      >
        <div className="cylinder-card">
          {/* Front Face: Authentic Shop Interior */}
          <div className="cylinder-face cylinder-face-front">
            <img
              src={salonHeroInterior}
              alt="PR Men Dot Salon Interior — Signature Wall Art, Madhurawada"
            />
            <div className="hero-image-caption">
              <span>SALON INTERIOR</span>
              <span className="caption-flip-hint">
                <span className="hint-desktop">MEET SATISH ↻</span>
                <span className="hint-touch">👆 TAP • MEET SATISH ↻</span>
              </span>
            </div>
            {/* Cylindrical lighting curvature highlight */}
            <div className="cylinder-specular-sheen" />
          </div>

          {/* Back Face: Founder & Owner Satish (Full-Card Portrait) */}
          <div className="cylinder-face cylinder-face-back owner-full-card">
            {/* High-Res Full Bleed Photo of Satish */}
            <img
              src={satishPhoto}
              alt="Satish — Founder & Owner of PR Men Dot Salon"
              className="owner-full-photo"
            />
            {/* Cinematic Gradient Vignette: Keeps face & scissors crystal clear while framing text */}
            <div className="owner-full-overlay" />

            <div className="owner-full-content">
              {/* Top Floating Glass Badge */}
              <div className="owner-top-pill">
                <Sparkles size={11} />
                <span>FOUNDER & OWNER • SATISH</span>
              </div>

              {/* Bottom Information Details */}
              <div className="owner-bottom-info">
                <div className="owner-heading-block">
                  <h3 className="owner-name">Satish</h3>
                  <span className="owner-designation">Founder & Owner • Master Craftsman</span>
                  <div className="owner-gold-accent-line">
                    <span>◆</span>
                  </div>
                </div>

                <blockquote className="owner-quote">
                  “Every cut is a personal signature. Built with craft, confidence & comfort.”
                </blockquote>

                <div className="owner-badges-row">
                  <div className="owner-mini-badge">
                    <strong>10+</strong>
                    <small>Years Craft</small>
                  </div>
                  <div className="owner-mini-badge">
                    <strong>Master</strong>
                    <small>Fade & Beard</small>
                  </div>
                  <div className="owner-mini-badge">
                    <strong>Vizag</strong>
                    <small>Madhurawada</small>
                  </div>
                </div>

                <div className="owner-bottom-bar">
                  <span>PR MEN DOT • CRAFT HERITAGE</span>
                  <span className="flip-back-cue">
                    <span className="hint-desktop">↺ FLIP BACK</span>
                    <span className="hint-touch">👆 TAP • FLIP BACK ↺</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Cylindrical lighting curvature highlight */}
            <div className="cylinder-specular-sheen" />
          </div>
        </div>
      </div>

      <button className="scroll-cue" onClick={() => onScrollTo("intro")}>
        <span>SCROLL TO DISCOVER</span>
        <ArrowDownRight size={17} />
      </button>
    </section>
  );
}
