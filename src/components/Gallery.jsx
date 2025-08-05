import React from 'react';
import './styles/Gallery.css'; // Assuming you have a CSS file for styling
const Gallery = ({ rows }) => {
  return (
    <div className="gallery">
      {rows.map((row, idx) => (
        <div key={idx} className="gallery-row">
          {row.map((image, imageIdx) => (
            <div key={imageIdx} className="gallery-item">
              <img src={image} alt={`gallery-item-${idx}-${imageIdx}`} className="gallery-image" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
