import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backg from "../assets/authbg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

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


  //Login logic


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = loginData; // Extract email and password from state

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login
        // For example, storing the JWT in localStorage
        localStorage.setItem("token", data.token);
        // Redirect or update the UI
        navigate("/"); // Replace with your success route
      } else {
        // Handle errors
        console.error("Login failed");
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error: ", error);
    }
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
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
