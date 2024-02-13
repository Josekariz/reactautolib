import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import backg from "../assets/authbg.jpg";
import { UserContext } from "../contexts/UserContext";

const SignUp = () => {
  //test

  //const dburl = "http://localhost:4000/api/auth/signup";

  


  const dburl= "https://backend-autolib.onrender.com/api/auth/signup"

  
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePhotoUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigateToLogin = () => {
    setActiveTab("login");
    navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const { name, email, password, profilePhotoUrl } = formData;

    const response = await fetch(dburl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, profilePhotoUrl }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      navigate("/"); // Redirect to homepage on successful signup
    } else {
      // Extract error message from response
      const errorData = await response.json();
      setError(errorData.message || "An error occurred"); // Display a generic error if the message is not found

      // Clear the error message after 7 seconds
      setTimeout(() => {
        setError("");
      }, 7000);
    }
    setIsLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${backg})` }}
    >
      <div className="bg-black p-8 rounded-lg shadow-lg text-white border-solid border-2 border-sky-400">
        <div className="flex justify-center mb-4">
          <button
            className={`text-2xl font-semibold mb-4 mr-4 ${
              activeTab === "login" ? "text-blue-500" : ""
            }`}
            disabled={activeTab === "login"}
            onClick={navigateToLogin}
          >
            Login
          </button>
          <button
            className={`text-2xl font-semibold mb-4 ${
              activeTab === "signup" ? "text-blue-500" : ""
            }`}
            disabled={activeTab === "signup"}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 mb-4 rounded text-white"
            type="text"
            required
            placeholder="First or Last Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="w-full p-2 mb-4 rounded text-white"
            type="email"
            placeholder="Email Address"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="w-full p-2 mb-4 rounded text-white"
            type="password"
            required
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-black text-white text-2xl font-semibold p-2 rounded border-solid border-2 border-sky-500 hover:bg-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {error && (
          <div className="text-red-500 mb-4 text-center mt-4">{error}</div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
