import React from "react";
import "./styles/ProfileCard.css";
import { Mail } from "lucide-react";
import linkedin from "../assets/linkedin.svg";

const ProfileCard = ({ name, position, email, linkedin: linkedinUrl, isVP }) => {
  const base = import.meta.env.BASE_URL || "/"; // "/" in dev, "/repo-name/" on GH Pages, etc.
  const prefix = isVP ? "/profile/leads/" : "/profile/chairs/";
  const imageName = name.toLowerCase().replace(/\s+/g, "") + ".jpeg";
  const imageSrc = `${base}${prefix}${imageName}`;

  return (
    <div className={`profile-card ${isVP ? "" : "sub-team-card"}`}>
      <img
        src={imageSrc}
        alt={`${name}'s profile`}
        className="profile-image"
        onError={(e) => {
          e.currentTarget.src = `${base}profile/panda.jpeg`; // fallback in /public/profile/
          e.currentTarget.onerror = null;
          console.log("Image failed to load:", e.currentTarget.src);
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
