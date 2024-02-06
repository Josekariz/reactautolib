import backg from "../assets/authbg.jpg";
import React from "react";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${backg})` }}
    >
      <div className="bg-black-100 glass p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {/* Your login form goes here */}
      </div>
    </div>
  );
};

export default Login;
