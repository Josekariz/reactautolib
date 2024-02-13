import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { UserContext } from "../contexts/UserContext";

export default function MyReviews() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchReviews = async () => {
    console.log("Fetching reviews for user ID:", user?._id);
    if (!user || !user._id) {
      console.log("User or user._id is undefined, skipping fetch");
      return [];
    }

    const response = await fetch(
      `http://localhost:4000/my-reviews/user?userId=${user._id}`
    );
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
  } = useQuery(["userReviews", user._id], fetchReviews, {});

  const handleCardClick = (review) => {
    navigate(`/reviews/${review._id}`, { state: { review } });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <div>Error: {error.message}</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
          {reviews &&
            reviews.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                onCardClick={handleCardClick}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
