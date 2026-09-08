import React from "react";
import { Maximize2 } from "lucide-react";
import { gallery } from "../data/salonData";

export default function GallerySection({ onPreviewImage }) {
  return (
    <section id="gallery" className="gallery section">
      <div className="gallery-head">
        <h2>
          Real craft.
          <br />
          <em>Real atmosphere.</em>
        </h2>
        <p>A visual peek inside the craft, vibe, and energy of PR Men Dot.</p>
      </div>

      <div className="gallery-grid">
        {gallery.map((g, i) => (
          <figure
            className={`gallery-item ${g.big ? "big" : ""}`}
            key={i}
            onClick={() => onPreviewImage(g)}
            title="Click to view full size"
          >
            <img src={g.src} alt={g.tag} loading="lazy" />
            <div className="gallery-overlay">
              <Maximize2 size={20} className="gallery-expand-icon" />
            </div>
            <figcaption>
              <span>{g.tag}</span>
              <span>0{i + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
