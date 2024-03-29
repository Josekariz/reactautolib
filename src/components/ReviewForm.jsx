import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function ReviewForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    modelYear: "",
    overview: "",
    worstExperience: "",
    advice: "",
    expenses: "",
    fuelEconomy: "",
    otherDetails: "",
    imagesLink: "",
    userId: user._id,
  });
  const navigate = useNavigate();

  const postdburl = "https://backend-autolib.onrender.com/api/reviews";

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(postdburl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Review submitted successfully");
      navigate(-1);
    } catch (error) {
      setError("An error occurred while processing the form: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="glass bg-neutral p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Add
        </h1>
        {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          />
          <input
            type="text"
            name="modelYear"
            value={formData.modelYear}
            onChange={handleInputChange}
            placeholder="Model Year"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          />
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleInputChange}
            placeholder="Overview"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          ></textarea>
          <input
            type="text"
            name="worstExperience"
            value={formData.worstExperience}
            onChange={handleInputChange}
            placeholder="Worst Experience"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          />
          <input
            type="text"
            name="advice"
            value={formData.advice}
            onChange={handleInputChange}
            placeholder="Advice"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          />
          <input
            type="text"
            name="expenses"
            value={formData.expenses}
            onChange={handleInputChange}
            placeholder="Expenses"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          />
          <input
            type="text"
            name="fuelEconomy"
            value={formData.fuelEconomy}
            onChange={handleInputChange}
            placeholder="Fuel Economy"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          />
          <input
            type="text"
            name="otherDetails"
            value={formData.otherDetails}
            onChange={handleInputChange}
            placeholder="Other Details"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          />
          <input
            type="text"
            name="imagesLink"
            value={formData.imagesLink}
            onChange={handleInputChange}
            placeholder="Images Link"
            className="w-full p-2 border rounded bg-gray-50 text-black"
          />

          <div className="flex justify-evenly space-x-2">
            <button
              type="button"
              onClick={() => navigate("/reviews")}
              className="bg-white text-black p-3 rounded border border-gray-300 hover:bg-red-200 w-4/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-warning text-white p-3 rounded hover:bg-primary w-4/5"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
