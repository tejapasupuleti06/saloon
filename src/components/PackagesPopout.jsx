import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, Crown, Tag, X } from "lucide-react";
import { comboOffers } from "../data/salonData";

export default function PackagesPopout({ isOpen, onClose, onSelectCombo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop popout-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="popout-dialog packages-popout-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Popout Header */}
        <div className="popout-header">
          <div>
            <div className="popout-tag package-tag-gold">
              <Crown size={14} /> CURATED VALUE COMBOS
            </div>
            <h2>Signature Grooming Packages</h2>
            <p>High-value bundles combining haircuts, beard crafts, facials, spas, and pedicures with instant savings.</p>
          </div>

          <button className="close popout-close-btn" onClick={onClose} aria-label="Close packages">
            <X size={20} />
          </button>
        </div>

        {/* Packages Grid with Minimal Photos */}
        <div className="packages-popout-grid">
          {comboOffers.map((combo) => (
            <div className="package-popout-card" key={combo.id}>
              {/* Minimalist Visual Identity Photo */}
              <div className="package-photo-wrap">
                <img
                  src={combo.image}
                  alt={combo.title}
                  className="package-photo"
                  loading="lazy"
                />
                <div className="package-photo-overlay" />
                
                <div className="package-photo-badges">
                  <span className="package-pill-tag">
                    <Tag size={11} /> {combo.tag}
                  </span>
                  <span className="package-save-pill">{combo.savings}</span>
                </div>
              </div>

              <div className="package-card-content">
                <h3>{combo.title}</h3>
                {combo.idealFor && (
                  <p className="package-ideal-for">{combo.idealFor}</p>
                )}

                <div className="package-price-row">
                  <div className="price-stack">
                    <span className="package-current-price">{combo.price}</span>
                    <span className="package-original-price">{combo.originalPrice}</span>
                  </div>
                  <span className="all-inclusive-tag">All-inclusive</span>
                </div>

                <div className="package-divider" />

                <div className="package-features-list">
                  <span className="package-features-title">WHAT'S INCLUDED:</span>
                  <ul>
                    {combo.features.map((feat, i) => (
                      <li key={i}>
                        <span className="package-check-circle">
                          <Check size={12} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="primary dark package-action-btn"
                  onClick={() => {
                    onClose();
                    onSelectCombo(combo.title);
                  }}
                >
                  BOOK THIS PACKAGE <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
