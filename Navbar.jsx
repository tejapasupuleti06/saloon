import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { siteData } from "../data/salonData";
import { getSalonStatus } from "../utils/salonHours";

export default function Navbar({ onOpenBooking, onScrollTo, onOpenServices, onOpenPackages }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState(getSalonStatus());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setStatus(getSalonStatus());
    }, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    onScrollTo(id);
  };

  const handleServicesClick = () => {
    setMenuOpen(false);
    onOpenServices();
  };

  const handlePackagesClick = () => {
    setMenuOpen(false);
    onOpenPackages();
  };

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <button className="brand" onClick={() => handleNavClick("home")} aria-label="PR Men Dot Home">
        <span>PR</span>
        <div>
          <b>MEN DOT</b>
          <small>saloon & beauty</small>
        </div>
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleNavClick("home")}>HOME</button>
        <button onClick={handleServicesClick} className="nav-highlight-link">SERVICES</button>
        <button onClick={handlePackagesClick} className="nav-highlight-link">PACKAGES</button>
        <button onClick={() => handleNavClick("gallery")}>GALLERY</button>
        <button onClick={() => handleNavClick("reviews")}>REVIEWS</button>
        <button onClick={() => handleNavClick("contact")}>CONTACT</button>
        
        <div className="mobile-nav-footer">
          <div className="mobile-status-row">
            <span className={`status-dot ${status.dotClass}`} />
            <span>{status.badgeText}</span>
          </div>
          <a href={siteData.telLink} className="mobile-call-btn">
            <Phone size={15} /> CALL {siteData.displayPhone}
          </a>
          <button className="mobile-book-btn" onClick={() => { setMenuOpen(false); onOpenBooking(); }}>
            RESERVE CHAIR <ArrowUpRight size={15} />
          </button>
        </div>
      </nav>

      <div className="nav-actions">
        <div className="nav-status-chip" title={`${status.badgeText} • ${status.hoursLabel}`}>
          <span className={`status-dot ${status.dotClass}`} />
          <span className="status-text">{status.shortText}</span>
        </div>
        <a href={siteData.telLink} className="nav-phone-chip" title="Call Salon">
          <Phone size={13} />
          <span>{siteData.displayPhone}</span>
        </a>
        <button className="nav-book" onClick={onOpenBooking}>
          BOOK <ArrowUpRight size={14} />
        </button>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
