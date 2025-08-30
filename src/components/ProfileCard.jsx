import React from "react";
import "./styles/ProfileCard.css"; 
import { Mail, Linkedin } from "lucide-react";

const ProfileCard = ({ name, position, email, linkedin, isVP }) => {

  const src = "/profile/";

  const positionsrc = isVP ? src + "leads/" : src + "chairs/"; 

  const imagesrc = positionsrc + name.toLowerCase().replace(/ /g, "") + ".jpeg";

  console.log("ProfileCard image src:", imagesrc);

  return (
    <div className={`profile-card ${isVP ? "" : "sub-team-card"}`}>

      <img src={imagesrc} alt={`${name}'s profile`} className="profile-image" 
      onError={(e) => {
      e.currentTarget.src = src + "panda.jpeg";   // swap to fallback
      e.currentTarget.onerror = null; // prevent infinite loop if fallback fails too
      }}/>

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
