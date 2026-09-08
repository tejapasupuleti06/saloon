import React from "react";
import { ArrowRight, Scissors, Crown, Tag } from "lucide-react";

export default function CraftHubSection({ onOpenServices, onOpenPackages }) {
  return (
    <section id="menu-hub" className="craft-hub section dark-section">
      <div className="hub-head">
        <div>
          <h2>
            Two Ways to Groom.
            <br />
            <em>Pick your craft or bundle.</em>
          </h2>
        </div>
        <p>
          Explore individual treatments tailored to precision, or select curated combo packages created for maximum style and savings.
        </p>
      </div>

      <div className="hub-cards-grid">
        {/* Gateway Card 1: Services Catalog */}
        <div className="hub-card hub-card-services" onClick={onOpenServices}>
          <div className="hub-card-bg-glow" />
          <div className="hub-card-top">
            <span className="hub-badge">
              <Scissors size={13} /> 6 CORE CRAFTS
            </span>
            <span className="hub-counter">FROM ₹100</span>
          </div>

          <div className="hub-card-body">
            <div className="hub-big-icon">✂</div>
            <h3>Individual Services</h3>
            <p>
              Hair cuts, skin fades, beard sculpts, gray coverage, relaxing hair spas, and deep-pore men's facials.
            </p>

            <div className="hub-preview-tags">
              <span>Classic Cuts</span>
              <span>Skin Fade</span>
              <span>Beard Trim</span>
              <span>Hair Spa</span>
              <span>De-Tan Facial</span>
            </div>
          </div>

          <div className="hub-card-footer">
            <button className="hub-trigger-btn" type="button">
              EXPLORE SERVICES MENU <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Gateway Card 2: Curated Packages */}
        <div className="hub-card hub-card-packages" onClick={onOpenPackages}>
          <div className="hub-card-bg-glow glow-gold" />
          <div className="hub-card-top">
            <span className="hub-badge badge-gold">
              <Tag size={13} /> POPULAR DEALS
            </span>
            <span className="hub-counter counter-gold">SAVE UP TO 35%</span>
          </div>

          <div className="hub-card-body">
            <div className="hub-big-icon icon-gold">
              <Crown size={42} strokeWidth={1.8} />
            </div>
            <h3>Signature Packages</h3>
            <p>
              Curated grooming combos combining haircut, beard steam, de-tan cleanup, and head massage for a complete upgrade.
            </p>

            <div className="hub-preview-tags tags-gold">
              <span>Executive Combo (₹399)</span>
              <span>Royal De-Tan (₹799)</span>
              <span>Groom Special (₹1,499)</span>
            </div>
          </div>

          <div className="hub-card-footer">
            <button className="hub-trigger-btn btn-gold" type="button">
              EXPLORE PACKAGES & COMBOS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
