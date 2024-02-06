import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');

    // Redirect to the login page or home page
    navigate('/login');
  };

  return (
    <button 
      onClick={handleSignOut} 
      className="text-black bg-white border border-transparent hover:border-yellow-500 hover:bg-yellow-500 p-2 rounded"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
