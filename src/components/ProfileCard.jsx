// ProfileCard.jsx
import React from "react";
import "./styles/ProfileCard.css";
import { Mail } from "lucide-react";
import linkedin from "../assets/linkedin.svg";

// Build a map of all profile images at build time
const PROFILE_IMAGES = import.meta.glob(
  "../assets/profile/**/*.{png,jpg,jpeg}",
  { eager: true, as: "url" }
);

const slugify = (s) => s.toLowerCase().replace(/\s+/g, "");

function resolveProfileUrl(name, isVP) {
  const dir = isVP ? "leads" : "chairs";
  const base = `../assets/profile/${dir}/${slugify(name)}`;

  // Try common extensions in order
  return (
    PROFILE_IMAGES[`${base}.jpeg`] ||
    PROFILE_IMAGES[`${base}.jpg`]  ||
    PROFILE_IMAGES[`${base}.png`]  ||
    PROFILE_IMAGES["../assets/profile/panda.jpeg"] // fallback
  );
}

export default function ProfileCard({ name, position, email, linkedin: linkedinUrl, isVP }) {
  const imgUrl = resolveProfileUrl(name, isVP);

  return (
    <div className={`profile-card ${isVP ? "" : "sub-team-card"}`}>
      <img src={imgUrl} alt={`${name}'s profile`} className="profile-image" />

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
}
