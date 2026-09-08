import React, { useState, useEffect } from "react";
import {
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Navigation
} from "lucide-react";
import { siteData } from "../data/salonData";
import { getSalonStatus } from "../utils/salonHours";

export default function ContactSection({ onOpenBooking }) {
  const [status, setStatus] = useState(getSalonStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getSalonStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="contact" className="contact section">
      <div className="contact-grid">
        <div className="contact-left">
          <h2>
            Your chair
            <br />
            <em>is waiting.</em>
          </h2>
          <p>
            Ready for your next signature look? Walk in directly or reserve your preferred time slot online. We are located right in Madhurawada, Visakhapatnam.
          </p>

          <div className="contact-cta-buttons">
            <button className="primary dark" onClick={onOpenBooking}>
              BOOK AN APPOINTMENT <CalendarDays size={17} />
            </button>
            <a
              href={`${siteData.whatsappLink}?text=${encodeURIComponent("Hello PR Men Dot! I would like to check availability for an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={17} /> CHAT ON WHATSAPP
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-line">
            <MapPin className="contact-icon" />
            <div>
              <small>LOCATION</small>
              <strong>{siteData.fullAddress}</strong>
              <a
                href={siteData.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-sublink"
              >
                Get Directions on Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div className="contact-line">
            <Phone className="contact-icon" />
            <div>
              <small>PHONE / DIRECT CALL</small>
              <strong>
                <a href={siteData.telLink} className="phone-link">
                  {siteData.displayPhone}
                </a>
              </strong>
              <span className="contact-subtext">Click to call immediately</span>
            </div>
          </div>

          <div className="contact-line">
            <Clock3 className="contact-icon" />
            <div>
              <div className="contact-line-header">
                <small>HOURS</small>
                <span className="contact-status-pill">
                  <span className={`status-dot ${status.dotClass}`} />
                  <span>{status.badgeText}</span>
                </span>
              </div>
              <strong>{siteData.hours}</strong>
              <span className="contact-subtext">Appointments & Walk-ins Welcome</span>
            </div>
          </div>

          <div className="contact-line">
            <MessageCircle className="contact-icon" />
            <div>
              <small>WHATSAPP BOOKING</small>
              <strong>{siteData.displayPhone}</strong>
              <span className="contact-subtext">Instant confirmation & queries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Google Maps Location & Directions */}
      <div className="contact-map-wrapper">
        <div className="contact-map-header">
          <div>
            <span className="map-badge">VISIT OUR CHAIR</span>
            <h3>Find PR Men Dot on Google Maps</h3>
            <p>Raja Rajeswari Temple, Mithilapuri Colony, Madhurawada, Visakhapatnam 530041</p>
          </div>
          <a
            href={siteData.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="map-nav-btn"
          >
            <Navigation size={15} />
            <span>START NAVIGATION</span>
          </a>
        </div>
        <div className="contact-map-frame">
          <iframe
            title="PR Men Dot Salon Location Map"
            src="https://maps.google.com/maps?q=Pr+Men+Dot+Saloon+and+Beauty+Raja+Rajeswari+Temple+Mithilapuri+Colony+Madhurawada+Visakhapatnam&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
