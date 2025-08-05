import React from "react";
import "./styles/Carousel.css";

const Carousel = ({ images }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* Duplicate the images for infinite looping */}
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} alt={`carousel-${index}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
