import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './AboutUs'
import Services from './Services'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/HKN-UCSD-Outreach-Website/about" element={<About />} />
        <Route path="/HKN-UCSD-Outreach-Website/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
