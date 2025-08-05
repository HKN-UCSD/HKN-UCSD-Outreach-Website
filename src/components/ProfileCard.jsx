import React from "react";
import "./styles/ProfileCard.css"; 
import { Mail, Linkedin } from "lucide-react";

const ProfileCard = ({ name, position, profileImage, email, linkedin, isVP }) => {
  return (
    <div className={`profile-card ${isVP ? "" : "sub-team-card"}`}>
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-position">{position}</p>
      <div className="profile-links">
        <a href={`mailto:${email}`} title="Email">
          <Mail size={20} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
