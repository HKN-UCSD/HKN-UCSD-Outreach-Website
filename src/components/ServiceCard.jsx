import React from "react";
import "./styles/ServiceCard.css"

export default function ServiceCard({ title, content, note }) {
  return (
    <div className="timeline-card">
      <h3>{title}</h3>
      <div className="card-box">{content}</div>
      {note && <p className="card-note">{note}</p>}
    </div>
  );
}