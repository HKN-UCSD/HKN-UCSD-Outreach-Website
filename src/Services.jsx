import "./App.css";
import "./Services.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

export default function Services() {

  return (
    <div className="page-container">
      <Navbar />

      {/* Heading */}
      <section className="header">
        <h1 className="title">
          What <span className="highlight">we</span> do...
        </h1>
      </section>

      <Timeline/>
      <Footer />
    </div>
  );
}

