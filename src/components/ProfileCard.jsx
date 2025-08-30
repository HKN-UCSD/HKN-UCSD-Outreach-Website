import React from "react";
import "./styles/ProfileCard.css";
import { Mail } from "lucide-react";
import linkedin from "../assets/linkedin.svg";

const ProfileCard = ({ name, position, email, linkedin: linkedinUrl, isVP }) => {
  const src = "../assets/profile/";
  const positionsrc = isVP ? src + "leads/" : src + "chairs/";
  const imagesrc = positionsrc + name.toLowerCase().replace(/ /g, "") + ".jpeg";

  return (
    <div className={`profile-card ${isVP ? "" : "sub-team-card"}`}>
      <img
        src={imagesrc}
        alt={`${name}'s profile`}
        className="profile-image"
        onError={(e) => {
          e.currentTarget.src = src + "panda.jpeg";
          e.currentTarget.onerror = null;
        }}
      />

      <h2 className="profile-name">{name}</h2>
      <p className="profile-position">{position}</p>

      <div className="profile-links">
        <a href={`mailto:${email}`} title="Email">
          <Mail size={20} />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src={linkedin} alt="LinkedIn" width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
