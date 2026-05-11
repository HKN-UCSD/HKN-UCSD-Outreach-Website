import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "./AboutUs.css"; 
import ProfileCard from "./components/ProfileCard"
import Footer from "./components/Footer";


export default function AboutUs() {
    const scroll = (direction) => {
        const container = document.getElementById("scroll-container");
        if (container) {
            const amount = 190;
            container.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
            });
        }
        };

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
                    name="Bianca Grunbaum"
                    position="Professional Outreach"
                    email="bgrunbaum@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/biancagrunbaum/"
                    isVP={true}
                    />
			
		    <ProfileCard
                    name="Riya Fernando"
                    position="Academic Outreach"
                    email="rfernando@ucsd.edu"
                    linkedin="https://www.linkedin.com/in/riyafernando"
                    isVP={true}
                    />
                </div>

                <h1 className = "sub-team">Our Outreach <span className = "highlight">Chairs</span></h1>

                <div className="scroll-wrapper">
                    <button className="scroll-btn left" onClick={() => scroll("left")}>
                        &#10094;
                    </button>

                    <div className="roles scroll-container" id="scroll-container">
                        <ProfileCard
                        name="Dakota Barnhardt"
                        position="Professional Outreach"
                        email="dbarnhardt@ucsd.edu"
                        linkedin="https://www.linkedin.com/in/dakota-barnhardt"
                        isVP={false}
                        />

                        <ProfileCard
                        name="Esther Choi"
                        position="Professional Outreach"
                        email="esc005@ucsd.edu"
                        linkedin="https://www.linkedin.com/in/estherchung1"
                        isVP={false}
                        />

                        <ProfileCard
                        name="Shreya Kashyap"
                        position="Professional Outreach"
                        email="shkashyap@ucsd.edu"
                        linkedin="https://www.linkedin.com/in/shreya-kashyap-4700a9383"
                        isVP={false}
                        />
                        
                        <ProfileCard
                        name="Chika Inagaki"
                        position="ECE Outreach"
                        email="cinagaki@ucsd.edu"
                        linkedin="https://www.linkedin.com/in/chika-inagaki-4a5ba8324/"
                        isVP={false}
                        />

                        <ProfileCard
                        name="Siyona Sinha"
                        position="CSE Outreach"
                        email="sis016@ucsd.edu"
                        linkedin="https://www.linkedin.com/in/siyona-s-2763a4318/"
                        isVP={false}
                        />

			            <ProfileCard
                        name="Felix Gil"
                        position="MAE Outreach"
                        email="f1gil@ucsd.edu"
                        linkedin="https://www.linkedin.com/in/felix-gil-38872729b/"
                        isVP={false}
                        />
                    </div>

                    <button className="scroll-btn right" onClick={() => scroll("right")}>
                        &#10095;
                    </button>
                    </div>

               
            </div>

           <Footer />
        </div>
        
    );
}
