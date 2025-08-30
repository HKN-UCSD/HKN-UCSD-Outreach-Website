import "./App.css";
import Navbar from "./components/Navbar";
import StatisticsSection from "./components/StatisticsComponent";
import Carousel from "./components/Carousel"
import Gallery from "./components/Gallery";
import land1 from './assets/land1.jpg';
import land2 from './assets/land2.jpg';
import land3 from './assets/land3.jpg';
import land4 from './assets/land4.jpg';
import land5 from './assets/land5.jpg';
import land6 from './assets/land6.jpg';
import land8 from './assets/land8.jpg';
import land9 from './assets/land9.jpg';
import land10 from './assets/land10.jpg';
import land11 from './assets/land11.jpg';
import land12 from './assets/land12.jpg';
import land13 from './assets/land13.jpg';
import land14 from './assets/land14.jpg';
import land15 from './assets/land15.jpg';
import land16 from './assets/land16.jpg';
import ramsey from './assets/ramsey.jpg';
import Footer from "./components/Footer";


export default function HKNOutreachPage() {

  const pageImages =[
    land3, land4, land5, land6,
    land8, land9, land10, land11, land12, land13,
    land14, land15, land16
  ]
  function splitRandomImages(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return {
      selected: shuffled.slice(0, count),
      leftover: shuffled.slice(count),
    };
  }

  const { selected, leftover } = splitRandomImages(pageImages, 4);
  const topCarouselImages = [ ...selected, ramsey];
  const galleryImages = leftover;


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
        <Gallery images={galleryImages} />
      </section>

      <Footer />
    </div>

    
  );
}

