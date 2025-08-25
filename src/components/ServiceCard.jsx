import React from "react";
import "./styles/ServiceCard.css"

export default function ServiceCard({title, content, note}, ref) {
  return (
    <div className="service-section">
        <h3 className="service-title" ref={ref}>{title}</h3>
          <div className="service-card">
            <button className="service-imageBtn">Image</button>
            <div className="service-info">
              <h4 className="service-name">{content}</h4>
            </div>
          </div>
          <div className="swipe-text">
            {note}
          </div>
    </div>
  );
}