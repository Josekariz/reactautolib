//login.js

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import backg from "../assets/authbg.jpg";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  //test
  
  const dburl= "http://localhost:4000/api/auth/login"
  
  //deployment
  
  //const dburl= "https://backend-autolib.onrender.com/api/auth/login"


  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigateToSignUp = () => {
    setActiveTab("signup");
    navigate("/sign_up");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const { email, password } = loginData;

    const response = await fetch(dburl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); 
      setUser(data.user);
      navigate("/");
    } else {
      // Extract error message from response
      const errorData = await response.json();
      setError(errorData.message || "An error occurred"); // Display a generic error if the message is not found

      // Clear the error message after 5 seconds
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
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`text-2xl font-semibold mb-4 ${
              activeTab === "signup" ? "text-blue-500" : ""
            }`}
            disabled={activeTab === "signup"}
            onClick={navigateToSignUp}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 mb-4 rounded text-white"
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={loginData.email}
            onChange={handleInputChange}
          />
          <input
            className="w-full p-2 mb-4 rounded text-white"
            type="password"
            placeholder="Password"
            name="password"
            required
            value={loginData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-black text-white text-2xl font-semibold p-2 rounded border-solid border-2 border-sky-500 hover:bg-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Log In"}
          </button>
        </form>
        {error && (
          <div className="text-red-500 mb-4 text-center mt-4">{error}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
