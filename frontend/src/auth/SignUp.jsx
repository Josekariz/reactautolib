import React from "react";
import backg from "../assets/authbg.jpg";

const SignUp = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${backg})` }}
    >
      <div className="bg-black-100 glass p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {/* Your signup form goes here */}
        
      </div>
    </div>
  );
};

export default SignUp;
