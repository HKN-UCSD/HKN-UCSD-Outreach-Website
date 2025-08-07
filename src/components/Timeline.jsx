import "./styles/Timeline.css"
import ServiceCard from "./ServiceCard"

const lessonData = [
  { title: "Computer Science", lesson: "Computer Vision" },
  { title: "Mechanical Engineering", lesson: "Paper Rockets" },
  { title: "Electrical Engineering", lesson: "Paper Circuits" }
];


export default function Timeline(data) {
  return (
    <div className="timeline-container">
      {/* Vertical Line */}
      <div className="timeline-line"></div>

      {/* Timeline Items */}
      {lessonData.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.lesson}</p>
          </div>
        </div>
      ))}
    </div>
  );
}