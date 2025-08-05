import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "./AboutUs.css"; 
import ProfileCard from "./components/ProfileCard"
import panda from "./assets/panda.jpg";
import google from "./assets/google.png";
import Footer from "./components/Footer";

export default function AboutUs() {

    return (
        <div className = "page-container">
            <Navbar />
           
            <div className="about-us">
                <h1 className ="our-mission">Our Mission</h1>
                <p className = "mission">
                We are a Student-led outreach program aimed to <span className = "highlight"> teach engineering </span>to <span className = "highlight">socioeconomically disadvantaged </span> K-12 students in the San Diego Area. We teach lessons on <span className = "highlight">mechanical engineering, electrical engineering,  computer science, </span> and a project. The objective is to engage college students in the community and help bring engineering to the next generation, filling the current gap in sciences in K-12 education. 
                </p>
            </div>
             <hr className = "hrdivider"/>

            <div className = "team">
                <h1 className = "our-team">Meet Our Team</h1>

                <div className = "roles">
                    <ProfileCard
                    name="Om Rabadia"
                    position="VP of Professional Outreach"
                    profileImage={panda}
                    email="orabadia@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/omrabadia/"
                    isVP = {true}
                    />

                    <ProfileCard
                    name="Tyler Meyers"
                    position="VP of Academic Outreach"
                    profileImage={panda}
                    email="tlmeyers@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/tyler-meyers-34ab7b252/"
                    isVP = {true}
                    />
                </div>

                <h1 className = "sub-team">Our <span className = "highlight">Lesson</span> Leads</h1>
                <div className = "roles">
                    <ProfileCard
                    name="Brandon Nghiem"
                    position="CSE Outreach Lead"
                    profileImage={panda}
                    email="bnghiem@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/brandon-nghiem/"
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Collin Walmsley"
                    position="ECE Outreach Lead"
                    profileImage={panda}
                    email=""
                    linkedin=""
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Max Zamorano"
                    position="MAE Outreach Lead"
                    profileImage={panda}
                    email=""
                    linkedin=""
                    isVP = {false}
                    />
                </div>

                <h1 className = "sub-team">Our <span className = "highlight">Tour</span> Leads</h1>
                <div className = "roles">
                    <ProfileCard
                    name="Justin Hernandez"
                    position="Tour Lead"
                    profileImage={panda}
                    email=""
                    linkedin=""
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Karina Zambani"
                    position="Tour Lead"
                    profileImage={panda}
                    email=""
                    linkedin=""
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Lucas Javier"
                    position="Tour Lead"
                    profileImage={panda}
                    email=""
                    linkedin=""
                    isVP = {false}
                    />
                </div>
            </div>

            <hr className = "hrdivider"/>

            <div className = "sponsors">
                <h1 className = "our-sponsors">Check out our wonderful <span className ="highlight">Sponsors </span> & <span className = "highlight">Partners </span></h1>
                <p className = "sponsor-text">We are proud to be working with the following organizations:</p>
                <div className = "sponsor-logos">
                    <img src={google} alt="Sponsor 1" className="sponsor-logo" />
                    <img src={google} alt="Sponsor 2" className="sponsor-logo" />
                    <img src={google} alt="Sponsor 3" className="sponsor-logo" />
                    <img src={google} alt="Sponsor 1" className="sponsor-logo" />
                    <img src={google} alt="Sponsor 2" className="sponsor-logo" />
                    <img src={google} alt="Sponsor 3" className="sponsor-logo" />
                    <img src={google} alt="Sponsor 1" className="sponsor-logo" />
                    <img src={google} alt="Sponsor 2" className="sponsor-logo" />
                    <img src={google} alt="Sponsor 3" className="sponsor-logo" />
                </div>
            </div>
           
           <Footer />
        </div>
        
    );
}