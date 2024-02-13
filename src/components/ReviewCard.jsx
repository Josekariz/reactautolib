//reviewcard.jsx

import React from "react";
import car from "../assets/simple.jpg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function ReviewCard({ review, onCardClick }) {
  return (
    <div
      onClick={() => onCardClick(review)}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow-100 glass transition-shadow duration-300 hover:shadow-2xl mx-auto cursor-pointer"
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
  );
}
