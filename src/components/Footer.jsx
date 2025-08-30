
import './styles/Footer.css'
import MatchedImageTextRow from "./MatchedImageTextRow";
import { Link, useLocation } from "react-router-dom";
import Rocket from "../assets/Rocket.png";
import Astronaut from "../assets/Astronaut.png"
const astronautNames = [
  "Sarah Tran" , "Charlie Wu", "Sabeel Mansuri", "Joel Bisarra", "Joona Kim",
  "Jim Villani", "Lisa Takai", "Tara Len", "Thomas Rexin", "Katherine Vu",
  "Om Rabadia ", "Tyler Meyers", "Henry Lin", "Alexander Parrish" , "Brandon Nghiem", 
  "Justin Hernandez", "Ethan Jenkins", "Max Zamorano"
];



export default function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <footer className="footer">
      <div className="containers">
      
      {/* Not Possible to match image height to text container height, so I created a seperate component called MatchImageTextRow */}
      
        <div className="footer">
        <MatchedImageTextRow
          imgSrc={Rocket}
          alt="Rocket"
          title="Launch our outreach program at your school today!"
          body="Reach Us at hkn-outreach@ucsd.edu"
        />
        </div>

      {/* Conditional Menu Links */}
        <div className="astronauts-block">
          <div className="astronauts-scroll-wrapper">
            <div className="astronauts">
              {astronautNames.map((name, i) => (
                <div key={i} className="astronaut-wrapper">
                  <img
                    src={Astronaut}
                    alt={`astronaut-${i}`}
                    className="astronaut"
                  />
                  <span className="tooltip">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}