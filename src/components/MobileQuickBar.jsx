import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { siteData } from "../data/salonData";
import { getSalonStatus } from "../utils/salonHours";

export default function MobileQuickBar({ onOpenBooking }) {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(getSalonStatus());

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 260px (past top hero)
      setVisible(window.scrollY > 260);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Update status every 60 seconds
    const interval = setInterval(() => {
      setStatus(getSalonStatus());
    }, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <aside className="mobile-quick-bar" aria-label="Quick contact actions">
      <div className="mqb-inner">
        {/* Quick Call */}
        <a
          href={siteData.telLink}
          className="mqb-btn mqb-call"
          aria-label="Direct Phone Call"
        >
          <Phone size={15} />
          <span>CALL NOW</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`${siteData.whatsappLink}?text=${encodeURIComponent(
            "Hello PR Men Dot! I would like to inquire about an appointment."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mqb-btn mqb-whatsapp"
          aria-label="WhatsApp Instant Chat"
        >
          <MessageCircle size={16} />
          <span>WHATSAPP</span>
        </a>

        {/* Book Chair */}
        <button
          onClick={onOpenBooking}
          className="mqb-btn mqb-book"
          aria-label="Book Chair"
        >
          <CalendarDays size={15} />
          <span>BOOK CHAIR</span>
        </button>
      </div>

      {/* Tiny live status ticker below buttons */}
      <div className="mqb-status-strip">
        <span className={`mqb-status-dot ${status.dotClass}`} />
        <span className="mqb-status-text">{status.badgeText}</span>
      </div>
    </aside>
  );
}
