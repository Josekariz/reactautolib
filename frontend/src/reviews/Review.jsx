import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

function Reviews() {
  const navigate = useNavigate();

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

  const handleCardClick = (review) => {
    navigate(`/reviews/${review._id}`, { state: { review } });
    


  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            review={review}
            onCardClick={handleCardClick}
          />
          
        )) 
        }
      </div>
    </div>
  );
}

export default Reviews;
