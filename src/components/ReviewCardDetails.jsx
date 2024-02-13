import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

import { FaThumbsUp, FaThumbsDown, FaEdit, FaTrash } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";

const ReviewCardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Create a navigate function
  const review = location.state?.review;
  const { user } = useContext(UserContext);

  console.log("user");
  console.log(user._id);
  console.log("rev");
  console.log(review.userId);

  if (!review) {
    return <div className="text-center my-5">Review not found</div>;
  }

  // Function to handle the go back action
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-2">{review.name}</h1>
      <img className="w-full mb-4" src={review.imagesLink} alt="Review" />
      <p className="text-gray-700 mb-4">{review.overview}</p>
      <p className="mb-2">
        <strong>Model Year:</strong> {review.modelYear}
      </p>
      <p className="mb-2">
        <strong>Worst Experience:</strong> {review.worstExperience}
      </p>
      <p className="mb-2">
        <strong>Advice:</strong> {review.advice}
      </p>
      <p className="mb-2">
        <strong>Expenses:</strong> {review.expenses}
      </p>
      <p className="mb-2">
        <strong>Fuel Economy:</strong> {review.fuelEconomy}
      </p>
      <p className="mb-4">
        <strong>Other Details:</strong> {review.otherDetails}
      </p>

      <div className="flex justify-evenly mb-4">
        {user._id === review.userId ? (
          // Render these buttons if the user is the owner
          <div className="flex space-x-24">
            {" "}
            {/* Add spacing between buttons */}
            <button className="flex items-center text-orange-500">
              <FaEdit className="mr-1" /> Update
            </button>
            <button className="flex items-center text-red-500">
              <FaTrash className="mr-1" /> Delete
            </button>
          </div>
        ) : (
          // Render these buttons if the user is not the owner
          <div className="flex space-x-24">
            {" "}
            {/* Add spacing between buttons */}
            <button className="flex items-center">
              <FaThumbsDown className="text-red-500 mr-1" /> Downvote
            </button>
            <button className="flex items-center">
              <FaThumbsUp className="text-green-500 mr-1" /> Upvote
            </button>
          </div>
        )}
      </div>

      {/* Replace Link with button that calls handleGoBack */}
      <button
        onClick={handleGoBack}
        className="text-blue-600 hover:text-blue-800"
      >
        Go back
      </button>
    </div>
  );
};

export default ReviewCardDetails;
