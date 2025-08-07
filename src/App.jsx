import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HKNOutreachPage from "./Home"
import About from "./AboutUs";
import Services from './Services';

function App(){
return(
   <Router>
    <Routes>
      <Route path="/" element={<HKNOutreachPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/contact" element={<Contact />} />
       */}
    </Routes>
  </Router>

);
}

export default App;