import React from "react";
import "./App.css"; // reuse styles
import "./Services.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard"
import trident from "./assets/trident.png";

const lessonData = [
  { title: "Computer Science", lesson: "Computer Vision" },
  { title: "Mechanical Engineering", lesson: "Paper Rockets" },
  { title: "Electrical Engineering", lesson: "Paper Circuits" }
];

const tourData = [
  { title: "UCSD Landmarks", stop: "Geisel" },
  { title: "UCSD Labs", stop: "RPL" }
];

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
            {lessonData.map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title}
                content={item.lesson}
                note="Swipe through to see our previous lessons"
              />
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
            {tourData.map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title}
                content={item.stop}
                note="Swipe to explore the stops"
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}