import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backg from "../assets/authbg.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          <button type="submit" className="w-full bg-black text-white text-2xl font-semibold p-2 rounded border-solid border-2 border-sky-500 hover:bg-blue-500">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
