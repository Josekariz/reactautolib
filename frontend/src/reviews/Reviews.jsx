import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import car from "../assets/simple.jpg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export function Reviews() {
  const navigate = useNavigate(); // Hook for navigation

  // Fetch reviews function
  const fetchReviews = async () => {
    const response = await fetch("http://localhost:4000/reviews");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  };

  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useQuery("reviews", fetchReviews);

  // Function to handle card click
  const handleCardClick = (reviewId) => {
    navigate(`/reviews/${reviewId}`); // Navigate to the review detail page
  };

  if (isLoading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center my-5 text-red-600">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-100 glass transition-shadow duration-300 hover:shadow-2xl mx-auto cursor-pointer"
            onClick={() => handleCardClick(review.id)}
          >
            <img className="w-full" src={car} alt="Review" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{review.name}</div>
              <p className="text-gray-700 text-base">{review.overview}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
              <button className="flex items-center">
                <FaThumbsUp className="text-green-500 mr-1" /> Upvote
              </button>
              <button className="flex items-center">
                <FaThumbsDown className="text-red-500 mr-1" /> Downvote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
