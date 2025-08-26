import "./App.css";
import "./Services.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import TourTimeline from "./components/TourTimeline";

const lessonData = [
  { title: "Computer Science", lesson: "Computer Vision" },
  { title: "Mechanical Engineering", lesson: "Paper Rockets" },
  { title: "Electrical Engineering", lesson: "Paper Circuits" },
];


const tourData = [
  { title: "UCSD Landmarks", lesson: "Geisel Library" },
  { title: "UCSD Labs", lesson: "Rocket Propulsion Labatory" },
]
export default function Services() {

  return (
    <div className="page-container">
      <Navbar />

      {/* Heading */}
      <section className="header">
        <h1 className="title">
          What <span className="highlight">we</span> do...
        </h1>
      </section>

      <Timeline lessonData = {lessonData}/>

      <TourTimeline lessonData = {tourData}/>
      <Footer />
    </div>
  );
}

