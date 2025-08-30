// ProfileCard.jsx
import React from "react";
import "./styles/ProfileCard.css";
import { Mail } from "lucide-react";
import linkedin from "../assets/linkedin.svg";

// Bundle all images in profile/ at build time
const RAW_IMAGES = import.meta.glob(
  "../assets/profile/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, as: "url" }
);

// Build an index like: "leads/karinazambani" -> URL
const PROFILE_INDEX = {};
const FALLBACK_URL = RAW_IMAGES["../assets/profile/panda.jpeg"];

for (const p in RAW_IMAGES) {
  const m = p.match(/\.\.\/assets\/profile\/(leads|chairs)\/([^/]+)\.(png|jpe?g|webp)$/i);
  if (m) {
    const dir = m[1].toLowerCase();
    const base = m[2].toLowerCase();
    PROFILE_INDEX[`${dir}/${base}`] = RAW_IMAGES[p];
  }
}

const slugify = (s) =>
  s
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

function resolveProfileUrl(name, isVP) {
  const dir = isVP ? "leads" : "chairs";
  const key = `${dir}/${slugify(name)}`;
  const url = PROFILE_INDEX[key] || FALLBACK_URL;
  if (import.meta.env.DEV && !PROFILE_INDEX[key]) {
    console.warn(`[ProfileCard] Missing photo for "${name}" (${key}). Using fallback.`);
  }
  return url;
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
