import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HKNOutreachPage from "./Home"
import About from "./AboutUs";

function App(){
return(
   <Router>
    <Routes>
      <Route path="/" element={<HKNOutreachPage />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} /> */}
    </Routes>
  </Router>

);
}

export default App;