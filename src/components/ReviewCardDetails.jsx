import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

import { FaThumbsUp, FaThumbsDown, FaEdit, FaTrash } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import EditReviewForm from "./EditForm";

const ReviewCardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Create a navigate function
  const review = location.state?.review;
  const { user } = useContext(UserContext);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  //test
  //const dbrul = `http://localhost:4000/api/reviews/${review._id}`
  
  const dbrul = `https://backend-autolib.onrender.com/api/reviews/${review._id}`


  if (!review) {
    return <div className="text-center my-5">Review not found</div>;
  }

  // Function to handle the go back action
  const handleGoBack = () => {
    navigate(-1);
  };

  // Function to handle update action
  const handleUpdate = () => {
    setIsEditing(true);

  };

  
  if (isEditing) {
    return <EditReviewForm existingData={review} />;
  }

  // Function to handle delete action
  const handleDelete = async () => {
    if (!review?._id) {
      navigate("/reviews")
      return;
    }

    try {
      const response = await fetch(
        dbrul,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // If you use token-based authentication, include the Authorization header
            // 'Authorization': `Bearer ${token}`
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete the review");
      }

       // "Review deleted successfully"
      // Here you can update state to show success message or navigate away
      setShowSuccessAlert(true);
      setTimeout(() => {
        navigate(-1); // Navigate back after showing the success alert
      }, 3000);
    } catch (error) {
      console.error("Error deleting the review:", error);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false); // Hide the error alert after some time
      }, 3000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      {showSuccessAlert && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your review has been deleted successfully!</span>
        </div>
      )}

      {showErrorAlert && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Failed to delete the review.</span>
        </div>
      )}
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
        {user?._id === review?.userId ? (
          <div className="flex space-x-24">
            <button
              onClick={handleUpdate}
              className="flex items-center text-orange-500"
            >
              <FaEdit className="mr-1" /> Update
            </button>
            <button
              onClick={handleDelete}
              className="flex items-center text-red-500"
            >
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
