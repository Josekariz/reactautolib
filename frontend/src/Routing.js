import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
// import other components

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Define other routes here */}
    </Routes>
  );
}

  
