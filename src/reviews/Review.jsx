//review.jsx
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FloatingButton from "../components/FloatingButton";
import Loading from "../components/Loading";

function Reviews() {
  // test
  //const dburl = "http://localhost:4000/reviews"

  const dburl = "https://backend-autolib.onrender.com/reviews";

  const navigate = useNavigate();

  const fetchReviews = async () => {
    const response = await fetch(dburl);
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

  const handleCardClick = (review) => {
    navigate(`/reviews/${review._id}`, { state: { review } });
  };

  if (isLoading) {
    return <Loading />;
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
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      <Footer />
      <FloatingButton />
    </>
  );
}

export default Reviews;
