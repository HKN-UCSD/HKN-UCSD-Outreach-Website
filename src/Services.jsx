import React, { useRef, useState, useLayoutEffect } from "react";
import "./App.css";
import "./Services.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import trident from "./assets/trident.png";

export default function Services() {
  const [previewImage, setPreviewImage] = useState(null);
  const [dotY, setDotY] = useState({ cs: 0, mae: 0, ee: 0 });

  // Refs
  const timelineColRef = useRef(null);
  const csTitleRef = useRef(null);
  const maeTitleRef = useRef(null);
  const eeTitleRef = useRef(null);

  const computePositions = () => {
    const tlBox = timelineColRef.current?.getBoundingClientRect();
    if (!tlBox) return;

    const centerYInTimeline = (el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return (r.top + r.height / 2) - tlBox.top; // element center relative to timeline-col
    };

    setDotY({
      cs: centerYInTimeline(csTitleRef.current),
      mae: centerYInTimeline(maeTitleRef.current),
      ee: centerYInTimeline(eeTitleRef.current),
    });
  };

  useLayoutEffect(() => {
    computePositions();
    const onResize = () => computePositions();
    const onScroll = () => computePositions();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="page-container">
      <Navbar />

      {/* Heading */}
      <section className="header">
        <h1 className="title">
          What <span className="highlight">we</span> do...
        </h1>
      </section>

      {/* 30% / 70% layout */}
      <div className="services-layout">
        {/* Left column */}
        <aside className="timeline-col" ref={timelineColRef}>
          <div className="timeline-line" />

          {/* Yellow dots aligned to H3 titles */}
          <span className="timeline-dot" style={{ top: dotY.cs }} aria-hidden="true" />
          <span className="timeline-dot" style={{ top: dotY.mae }} aria-hidden="true" />
          <span className="timeline-dot" style={{ top: dotY.ee }} aria-hidden="true" />

          <div className="trident-block">
            <h2 className="trident-title">Lessons</h2>
            <img className="trident-img" src={trident} alt="Trident" />
            <small className="trident-sub">We come to you</small>
          </div>
        </aside>

        {/* Right column */}
        <main className="content-col">
          <p className="content-text">
            We craft each lesson to fit your students’ needs—explore our tailored resources in
            <span className="highlight"> computer science</span>,
            <span className="highlight"> mechanical engineering</span>, and
            <span className="highlight"> electrical engineering</span> to empower every learner.
          </p>

          {/* Computer Science */}
          <div className="service-section">
            <h3 className="service-title" ref={csTitleRef}>Computer Science</h3>
            <div className="service-card">
              <button className="service-imageBtn">Image</button>
              <div className="service-info">
                <h4 className="service-name">Computer Vision</h4>
              </div>
            </div>
            <div className="swipe-text">
              Swipe through to see our previous lessons
            </div>
          </div>

          {/* Mechanical Engineering */}
          <div className="service-section">
            <h3 className="service-title" ref={maeTitleRef}>Mechanical Engineering</h3>
            <div className="service-card">
              <button className="service-imageBtn">Image</button>
              <div className="service-info">
                <h4 className="service-name">Paper Rockets</h4>
              </div>
            </div>
            <div className="swipe-text">
              Swipe through to see our previous lessons
            </div>
          </div>

          {/* Electrical Engineering */}
          <div className="service-section">
            <h3 className="service-title" ref={eeTitleRef}>Electrical Engineering</h3>
            <div className="service-card">
              <button className="service-imageBtn">Image</button>
              <div className="service-info">
                <h4 className="service-name">Paper Circuits</h4>
              </div>
            </div>
            <div className="swipe-text">
              Swipe through to see our previous lessons
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

