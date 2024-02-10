// ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { user } = useContext(UserContext);

  // If there is a user, return the component, otherwise redirect to login
  return user ? <Component {...props} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
