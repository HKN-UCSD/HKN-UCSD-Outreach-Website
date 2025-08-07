
import './styles/Footer.css'
import MatchedImageTextRow from "./MatchedImageTextRow";
import { Link, useLocation } from "react-router-dom";
import Rocket from "../assets/Rocket.png";




export default function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <footer className="footer">
      <div className="containers">
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a></li>

        <li className="social-icon__item"><a className="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a></li>

        <li className="social-icon__item"><a className="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a></li>
          
        <li className="social-icon__item"><a className="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a></li>
      </ul>
      
      {/* Not Possible to match image height to text container height, so I created a seperate component called MatchImageTextRow */}
      
      <div className="footer">
      <MatchedImageTextRow
        imgSrc={Rocket}
        alt="Rocket"
        title="Launch our outreach program at your school today!"
        body="We bring HKN to students across the country through engaging mentorship."
      />
      </div>

      {/* Conditional Menu Links */}
        <ul className="menu">
          {currentPath !== "/about" && (
            <li className="menu__item">
              <Link className="menu__link" to="/about">About</Link>
            </li>
          )}
          {currentPath !== "/services" && (
            <li className="menu__item">
              <Link className="menu__link" to="/services">Services</Link>
            </li>
          )}
          {currentPath !== "/contact" && (
            <li className="menu__item">
              <Link className="menu__link" to="/contact">Contact</Link>
            </li>
          )}
          {currentPath !== "/" && (
            <li className="menu__item">
              <Link className="menu__link" to="/">Home</Link>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}