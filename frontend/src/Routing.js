//Routing.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ReviewForm from "./components/ReviewForm";
import Reviews from "./reviews/Review";
// import other components
import ReviewCardDetails from './components/ReviewCardDetails';
import Login from "./auth/LogIn";
import SignUp from "./auth/SignUp";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reviews_form" element={<ReviewForm />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/reviews/:id" element={<ReviewCardDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign_up" element={<SignUp />} />

      {/* Define other routes here */}
    </Routes>
  );
}

  
