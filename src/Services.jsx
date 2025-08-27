// Services.jsx
import "./App.css";
import "./Services.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import TourTimeline from "./components/TourTimeline";
import csPic from "./assets/cs_wksp.jpg";
import maePic from "./assets/mae_wksp.jpg";
import eePic from "./assets/ee_wksp.jpg";
import tourJacobs from "./assets/jacobs_tour.png";
import tourRPL from "./assets/rpl_tour.jpg";
import {useEffect} from "react";

const lessonData = [
  { title: "Computer Science", lesson: "Game Design", image: csPic },
  { title: "Mechanical Engineering", lesson: "Robotic Arm Car", image: maePic },
  { title: "Electrical Engineering", lesson: "Buzzer Circuit Game", image: eePic },
];

const tourData = [
  { title: "UCSD Landmarks", lesson: "Geisel Library", image: tourJacobs },
  { title: "UCSD Labs", lesson: "Rocket Propulsion Laboratory", image: tourRPL },
];

export default function Services() {

  useEffect(() => {
    const bridge = document.getElementById("timeline-bridge");
    const leftLine  = document.querySelector(".timeline-line");           // lessons side
    const rightLine = document.querySelector(".tour-timeline-line");      // tours side
    if (!bridge || !leftLine || !rightLine) return;

    const placeBridge = () => {
      const leftRect   = leftLine.getBoundingClientRect();
      const rightRect  = rightLine.getBoundingClientRect();
      const bridgeRect = bridge.getBoundingClientRect();

      // start: right edge of left vertical line
      const start = (leftRect.left + leftRect.width) - bridgeRect.left;
      // end: left edge of right vertical line
      const end   = (rightRect.left) - bridgeRect.left;

      bridge.style.setProperty("--bridge-left",  `${start}px`);
      bridge.style.setProperty("--bridge-right", `${end}px`);
    };

    // initial + on resize
    placeBridge();
    const ro = new ResizeObserver(placeBridge);
    ro.observe(leftLine);
    ro.observe(rightLine);
    ro.observe(bridge);

    window.addEventListener("resize", placeBridge);
    window.addEventListener("load", placeBridge);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", placeBridge);
      window.removeEventListener("load", placeBridge);
    };
  }, []);


  return (
    <div className="page-container">
      <Navbar />

      <section className="header">
        <h1 className="title">
          What <span className="highlight">we</span> do...
        </h1>
      </section>

      {/* NEW: shared wrapper + bridge */}
      <section className="timelines-joined">
        <Timeline lessonData={lessonData} />

        {/* draws the horizontal connector *behind* both timelines */}
        <div id="timeline-bridge" className="timeline-bridge" aria-hidden />

        <TourTimeline lessonData={tourData} />
      </section>

      <Footer />
    </div>
  );
}
