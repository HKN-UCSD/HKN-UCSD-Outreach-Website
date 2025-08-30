import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "./AboutUs.css"; 
import ProfileCard from "./components/ProfileCard"
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

             <h1 className = "sub-team">We bring STEM to <span className = "highlight"> underrepresented schools </span>across San Diego.</h1>
             <hr className = "hrdivider"/>

            <div className = "team">
                <h1 className = "sub-team">Our Outreach <span className = "highlight">Leads</span></h1>
                <div className = "roles">
                    <ProfileCard
                    name="Karina
                    Zambani"
                    position="VP of Professional Outreach"
                    email="kzambani@ucsd.edu"
                    linkedin=""
                    isVP = {true}
                    />

                    <ProfileCard
                    name="Collin
                    Whamsley"
                    position="VP of Academic Outreach"
                    email="cowalmsley@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/collin-walmsley/"
                    isVP = {true}
                    />
                </div>

                <h1 className = "sub-team">Our Outreach <span className = "highlight">Chairs</span></h1>

                <div className = "roles">
                    
                    <ProfileCard
                    name="Lucas
                    Javier"
                    position="Professional Outreach"
                    email="lujavier@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/lucasjavier1/"
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Esther
                    Chung"
                    position="Professional Outreach"
                    email="esc005@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/estherchung1/"
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Bianca
                    Grunbaum"
                    position="Professional Outreach"
                    email="bgrunbaum@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/biancagrunbaum/"
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Amrit
                    Chahal"
                    position="ECE Outreach"
                    email="amchahal@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/amrit-chahal-455a3b243/"
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Andrew
                    Jeter"
                    position="CSE Outreach"
                    email="ajeter@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/andrewcjeter/"
                    isVP = {false}
                    />

                    <ProfileCard
                    name="Sara
                    Chowdhury"
                    position="MAE Outreach"
                    email="stchowdhury@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/sara-chowdhury-stc101/"
                    isVP = {false}
                    />
                </div>

               
            </div>

            {/*
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
            */}
           <Footer />
        </div>
        
    );
}