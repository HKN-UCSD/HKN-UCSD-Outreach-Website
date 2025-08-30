import React, { useState, useEffect } from 'react';
import './styles/Gallery.css';

const Gallery = ({ images = [] }) => {
  const [activeSrc, setActiveSrc] = useState(null);

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActiveSrc(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Optional: lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = activeSrc ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeSrc]);

  return (
    <>
      <div className="gallery">
        {images.map((image, idx) => (
          <button
            key={idx}
            className="gallery-item"
            onClick={() => setActiveSrc(image)}
            aria-label={`Open image ${idx + 1}`}
          >
            <img src={image} alt={`gallery-item-${idx}`} className="gallery-image" />
          </button>
        ))}
      </div>

      {activeSrc && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setActiveSrc(null)}
        >
          <img
            src={activeSrc}
            alt="expanded"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()} /* don’t close when clicking the image */
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
