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

const lessonData = [
  { title: "Computer Science", lesson: "Game Design", image: csPic },
  { title: "Mechanical Engineering", lesson: "Robotic Arm Car", image: maePic },
  { title: "Electrical Engineering", lesson: "Buzzer Circuit Game", image: eePic },
];

const tourData = [
  { title: "UCSD Landmarks", lesson: "Geisel Library" },
  { title: "UCSD Labs", lesson: "Rocket Propulsion Labatory" },
];

export default function Services() {
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
        <div className="timeline-bridge" aria-hidden />

        <TourTimeline lessonData={tourData} />
      </section>

      <Footer />
    </div>
  );
}
