import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, Clock, Search, Scissors, Sparkles, X } from "lucide-react";
import { services, serviceCategories } from "../data/salonData";

export default function ServicesPopout({ isOpen, onClose, onSelectService }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Close on Escape key press and prevent background scrolling
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

  // Filter by category and search term
  const filteredServices = services.filter((s) => {
    const matchesCategory =
      activeCategory === "all" || s.categoryId === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.items && s.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  return createPortal(
    <div className="modal-backdrop popout-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="popout-dialog services-popout-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Popout Header */}
        <div className="popout-header">
          <div>
            <div className="popout-tag">
              <Scissors size={14} /> OFFICIAL SALON SERVICE CATALOG
            </div>
            <h2>The Craft & Services Menu</h2>
            <p>16 specialized grooming crafts from cuts and beard styling to spas, de-tan, and pedicures.</p>
          </div>

          <button className="close popout-close-btn" onClick={onClose} aria-label="Close services">
            <X size={20} />
          </button>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="popout-toolbar">
          <div className="popout-search-wrap">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Search by haircut, beard, spa, de-tan, massage, pedicure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="popout-search-input"
              autoFocus
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery("")}>
                <X size={14} />
              </button>
            )}
          </div>

          <div className="popout-tabs-bar">
            {serviceCategories.map((cat) => {
              const count =
                cat.id === "all"
                  ? services.length
                  : services.filter((s) => s.categoryId === cat.id).length;

              return (
                <button
                  key={cat.id}
                  className={`popout-tab ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="tab-count-badge">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Popout Grid */}
        <div className="popout-grid">
          {filteredServices.length === 0 ? (
            <div className="popout-no-results">
              <Scissors size={36} className="no-results-icon" />
              <h3>No matching services found</h3>
              <p>Try searching for different keywords or select "ALL SERVICES".</p>
              <button
                className="primary ghost-dark"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                SHOW ALL SERVICES
              </button>
            </div>
          ) : (
            filteredServices.map((service) => (
              <div className="popout-service-card" key={service.id}>
                <div className="card-top-row">
                  <span className="card-tool-badge">{service.tool}</span>
                  <span className="card-price-pill">{service.price}</span>
                </div>

                <div className="card-header-icon-row">
                  <span className="card-icon">{service.icon}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <span className="card-duration">
                      <Clock size={12} /> {service.duration}
                    </span>
                  </div>
                </div>

                <p className="card-desc">{service.desc}</p>

                <div className="card-features-box">
                  <span className="features-kicker">INCLUDED IN THIS SERVICE:</span>
                  <ul>
                    {service.items &&
                      service.items.map((item, i) => (
                        <li key={i}>
                          <Check size={13} className="feature-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <button
                  className="primary dark popout-card-btn"
                  onClick={() => {
                    onClose();
                    onSelectService(service.title);
                  }}
                >
                  BOOK THIS SERVICE <ArrowRight size={15} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
