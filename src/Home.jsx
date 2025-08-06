import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StatisticsSection from "./components/StatisticsComponent";
import Carousel from "./components/Carousel"
import Gallery from "./components/Gallery";
import land1 from './assets/land1.jpg';
import land2 from './assets/land2.jpg';
import land3 from './assets/land3.jpg';
import land4 from './assets/land4.jpg';
import Footer from "./components/Footer";


export default function HKNOutreachPage() {
  const topCarouselImages = [
   land1,land2,land3,land4
  ];

  const galleryImages = [
    [land1,land2,land3,],
    [land4, land1,land2],
    [land3,land4, land1],
  ];

  return (
    <div className="page-container">
      <Navbar />
      <header className="header">
        <h1 className="title">
          HKN Outreach <span className="highlight"> @UCSD</span>
        </h1>
        <p className="subtitle">
          Empowering the <span className="highlight extra">next generation</span> of engineers
        </p>
      </header>

      <div className = "carouselContainer">
        <Carousel images={topCarouselImages} />
      </div>
      

    {/* <p className = "statsIntro">let our <span className = "highlight">numbers</span> do the talking ...</p> */}

    <StatisticsSection />
    <hr className = "hrdivider"/>

    <div className="subsection2">
  {/* First Row: Quote on the Left, Image on the Right */}
  <div className="row">
    <div className="quote">
    <p>
    "My <span className="highlight">students love</span> having the college 
    <span className="highlight"> students</span> interact with them. I love the extra 
    help, too! Everyone is <span className="highlight">friendly</span> and <span className="highlight">happy</span> to share their passion with my fourth 
    graders. What great <span className="highlight">role models</span>!"
  </p>
  <p className = "speaker">- Teacher, 2024</p>

    </div>
    <div className="image">
      <img src={land1} alt="Engineering" className="subsection-image" />
    </div>
  </div>

  {/* Second Row: Image on the Left, Quote on the Right */}
  <div className="row">
    <div className="image">
      <img src={land2} alt="Innovation" className="subsection-image" />
    </div>
    <div className="quote">
    <p>
      "Thank you for all the work that we did and all the things that we learned.
      For example, <span className="highlight">coding</span>, <span className="highlight">engineering</span> and much more.
      Now <span className="highlight">I really want to go to UCSD</span> when I grow up!"
    </p>
    <p className = "speaker">- Student, 2023</p>
    </div>
   
  </div>
</div>

    <hr className = "hrdivider"/>
      <section className="gallery-section">
        <h1 className="gallery-title">Gallery</h1>
        <Gallery rows={galleryImages} />
      </section>

      <Footer />
    </div>

    
  );
}

