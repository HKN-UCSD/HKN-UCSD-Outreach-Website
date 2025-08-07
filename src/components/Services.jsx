import React from "react";
import "../App.css"; // reuse styles
import "./styles/Services.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import trident from "../assets/trident.png";

export default function Services() {
  return (
    <div className="page-container">
      <Navbar />

      <section className="header">
        <h1 className="title">What <span className="highlight">we</span> do...</h1>
      </section>

      <section className="timeline">
        {/* LESSONS SECTION */}
        <div className="timeline-section">
          <div className="timeline-header">
            <div className="timeline-icon lessons-icon">Lessons</div>
            <p className="timeline-subtitle">
              We come to you — explore our tailored resources in{" "}
              <span className="highlight">computer science</span>,{" "}
              <span className="highlight">mechanical engineering</span>, and{" "}
              <span className="highlight">electrical engineering</span> to empower every learner.
            </p>
          </div>

          <div className="timeline-cards">
            {[
              { title: "Computer Science", lesson: "Computer Vision" },
              { title: "Mechanical Engineering", lesson: "Paper Rockets" },
              { title: "Electrical Engineering", lesson: "Paper Circuits" }
            ].map((item, index) => (
              <div key={index} className="timeline-card">
                <h3>{item.title}</h3>
                <div className="card-box">{item.lesson}</div>
                <p className="card-note">Swipe through to see our previous lessons</p>
              </div>
            ))}
          </div>
        </div>

        {/* TOURS SECTION */}
        <div className="timeline-section">
          <div className="timeline-header">
            <div className="timeline-icon tours-icon">Tours</div>
            <p className="timeline-subtitle">
              You come to us — explore our <span className="highlight">customized campus experiences</span>, 
              from <span className="highlight">cutting-edge labs</span> to vibrant <span className="highlight">student life</span>.
            </p>
          </div>

          <div className="timeline-cards">
            {[
              { title: "UCSD Landmarks", stop: "Geisel" },
              { title: "UCSD Labs", stop: "RPL" }
            ].map((item, index) => (
              <div key={index} className="timeline-card">
                <h3>{item.title}</h3>
                <div className="card-box">{item.stop}</div>
                <p className="card-note">Swipe to explore the stops</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}