import React from 'react';
import './styles/Gallery.css'; // Assuming you have a CSS file for styling

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, idx) => (
        <div key={idx} className="gallery-item">
          <img src={image} alt={`gallery-item-${idx}`} className="gallery-image" />
        </div>
      ))}
    </div>
  );
};


export default Gallery;
