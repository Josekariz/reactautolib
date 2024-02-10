//Routing.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ReviewForm from "./components/ReviewForm";
import Reviews from "./reviews/Review";
// import other components
import ReviewCardDetails from "./components/ReviewCardDetails";
import Login from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import Profile from "./profile/Profile";
import Account from "./profile/Account";
import MyReviews from "./profile/MyReviews";
import ProtectedRoute from "./components/ProtectedRoute";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/add_review" element={<ReviewForm />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/reviews/:id" element={<ReviewCardDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign_up" element={<SignUp />} />

      <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
      <Route
        path="/profile/my-account"
        element={<ProtectedRoute element={Account} />}
      />
      <Route
        path="/profile/my-reviews"
        element={<ProtectedRoute element={MyReviews} />}
      />
    </Routes>
  );
}
