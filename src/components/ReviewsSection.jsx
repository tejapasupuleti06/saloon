import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { testimonials, siteData } from "../data/salonData";

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev + testimonials.length - 1) % testimonials.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const item = testimonials[currentIndex];

  return (
    <section id="reviews" className="reviews section dark-section">
      <div className="mirror-wrap">
        <div className="mirror">
          <div className="mirror-shine" />
          
          <div className="stars">
            {Array.from({ length: item.stars || 5 }).map((_, idx) => (
              <Star key={idx} size={16} fill="#d8d2c5" color="#d8d2c5" />
            ))}
          </div>

          <blockquote>“{item.text}”</blockquote>

          <div className="review-person-box">
            <div className="review-person">{item.author}</div>
            <span className="review-badge">{item.badge}</span>
          </div>

          <div className="review-controls">
            <button onClick={prevReview} aria-label="Previous review">
              <ChevronLeft size={18} />
            </button>
            <span>
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
            <button onClick={nextReview} aria-label="Next review">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Google Reviews CTA Strip */}
        <div className="google-review-bar">
          <div className="google-score">
            <span className="google-g">G</span>
            <div>
              <strong>5.0 / 5.0 Rating</strong>
              <small>Verified Client Reviews in Madhurawada</small>
            </div>
          </div>
          <a
            href={siteData.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="google-review-btn"
          >
            <span>LEAVE A REVIEW ON GOOGLE</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
