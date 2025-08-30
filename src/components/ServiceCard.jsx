import React, { forwardRef } from "react";
import "./styles/ServiceCard.css";

const ServiceCard = forwardRef(function ServiceCard(
  { title, content, note, reverse = false, image },
  ref
) {
  return (
    <div className={`service-section ${reverse ? "reverse" : ""}`}>
      <h3 className="service-title" ref={ref}>{title}</h3>

      {reverse ? (
        <>
          <div className="swipe-text">{note}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit.</p>
          </div>
          <div className="service-card">
            <img src={image} alt={title} className="service-image" />
            <div className="service-info">
              <h4 className="service-name">{content}</h4>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="service-card">
            <img src={image} alt={title} className="service-image" />
            <div className="service-info">
              <h4 className="service-name">{content}</h4>
            </div>
          </div>
          <div className="swipe-text">{note}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit.</p>
          </div>
        </>
      )}
    </div>
  );
});

export default ServiceCard;
