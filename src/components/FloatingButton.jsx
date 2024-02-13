import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa"; // Import the plus icon from React Icons

const FloatingButton = () => {
  return (
    <Link
      to="/add_review"
      className=" flex fixed bottom-4 right-4 bg-yellow-600 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded-2xl items-center"
    >
      <FaPlus /> Review
    </Link>
  );
};

export default FloatingButton;
