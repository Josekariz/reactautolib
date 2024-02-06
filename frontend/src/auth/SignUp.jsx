import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backg from "../assets/authbg.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("signup");

  const navigateToLogin = () => {
    setActiveTab("login");
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${backg})` }}
    >
      <div className="bg-black p-8 rounded-lg shadow-lg text-white">
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

        <div>
          <input
            className="w-full p-2 mb-4 rounded text-black"
            type="text"
            placeholder="First or Last Name"
          />
          <input
            className="w-full p-2 mb-4 rounded text-black"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-full p-2 mb-4 rounded text-black"
            type="password"
            placeholder="Password"
          />
          <button className="w-full bg-black text-white text-2xl font-semibold p-2 rounded border-solid border-2 border-sky-500 hover:bg-blue-500">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
