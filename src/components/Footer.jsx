import React from "react";
import { ArrowUp, Phone } from "lucide-react";
import { siteData } from "../data/salonData";

export default function Footer({ onOpenBooking, onScrollTo, onOpenServices, onOpenPackages }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">PR MEN DOT</div>
          <p>{siteData.subtitle}</p>
          <span className="footer-loc">{siteData.location}</span>
        </div>
        <div className="footer-right">
          <div className="footer-tag">CUT. STYLE. DEFINE.</div>
          <a href={siteData.telLink} className="footer-phone">
            <Phone size={14} /> {siteData.displayPhone}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PR MEN DOT SALOON & BEAUTY. All rights reserved.</span>
        <div className="footer-nav">
          <button onClick={() => onScrollTo("home")} className="footer-link">
            TOP <ArrowUp size={12} />
          </button>
          <button onClick={onOpenServices} className="footer-link">
            SERVICES
          </button>
          <button onClick={onOpenPackages} className="footer-link">
            PACKAGES
          </button>
          <button onClick={onOpenBooking} className="footer-link-highlight">
            BOOK A CHAIR
          </button>
        </div>
      </div>
    </footer>
  );
}
