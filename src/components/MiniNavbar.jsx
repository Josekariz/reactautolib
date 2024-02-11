// MiniNavbar.js
import React from "react";
import { NavLink } from "react-router-dom";

function MiniNavbar() {
  return (
    <div className="glass bg-black bg-opacity-50 text-white text-center p-2 flex justify-evenly items-center">
      <NavLink
        to="/profile/my-account"
        className={({ isActive }) =>
          `mx-2 pb-1 ${
            isActive
              ? "border-b-2 border-white"
              : "hover:border-b-2 hover:border-white"
          }`
        }
      >
        Update Profile
      </NavLink>
      <NavLink
        to="/profile/my-reviews"
        className={({ isActive }) =>
          `mx-2 pb-1 ${
            isActive
              ? "border-b-2 border-white"
              : "hover:border-b-2 hover:border-white"
          }`
        }
      >
        My Reviews
      </NavLink>
    </div>
  );
}

export default MiniNavbar;
