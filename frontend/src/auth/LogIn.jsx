import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backg from "../assets/authbg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const navigateToSignUp = () => {
    setActiveTab("signup");
    navigate("/sign_up");
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

        <form>
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
