import Astronaut from "../assets/Astronaut.png"; 
import Rocket from "../assets/Rocket.png";
import { Link } from "react-router-dom";
import "./styles/Footer.css"; 

const astronautNames = [
  "Sarah Tran" , "Charlie Wu", "Sabeel Mansuri", "Joel Bisarra", "Joona Kim",
  "Jim Villani", "Lisa Takai", "Tara Len", "Thomas Rexin", "Katherine Vu",
  "Om Rabadia ", "Tyler Meyers", "Henry Lin", "Alexander Parrish" , "Brandon Nghiem", 
  "Justin Hernandez", "Ethan Jenkins", "Max Zamorano"
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-upper-row">
        <p className="footer-blurb">
          Launch our outreach program at your school today!
        </p>
        <nav>
          <ul> 
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </nav> 
      </div>
      <div className="footer-bottom-row">
        <div className="rocket-container-left">
          <img src={Rocket} alt="rocket" className="rocket" />
        </div>
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
    </div>
  );
};

export default Footer;
