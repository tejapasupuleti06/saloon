import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return createPortal(
    <div className="modal-backdrop lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="close lightbox-close" onClick={onClose} aria-label="Close image">
          <X size={20} />
        </button>
        <img src={image.src} alt={image.tag} className="lightbox-img" />
        <div className="lightbox-caption">
          <strong>{image.tag}</strong>
          {image.caption && <span>{image.caption}</span>}
        </div>
      </div>
    </div>,
    document.body
  );
}
