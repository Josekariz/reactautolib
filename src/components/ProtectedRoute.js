// ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { user, isLoading } = useContext(UserContext);

  // Show loading or a blank screen while user data is being fetched
  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  // If there is a user, return the component, otherwise redirect to login
  return user ? <Component {...props} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
