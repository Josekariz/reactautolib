//Navbar.js

import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Prof from "../assets/profileholder.png";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const profileImage = user ? user.profilePhotoUrl : Prof;
  const profileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Add this line
    setUser(null);
    navigate("/");
  };

  // ... rest of your code ...

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownRef, mobileMenuRef]);

  const renderNavLinks = () =>
    ["Home", "Reviews", "About Us", "Contact Us"].map((title, index) => (
      <Link
        key={index}
        to={["/", "/reviews", "/about", "/contact"][index]}
        className="py-2 px-3 text-white text-lg navbar-link hover:text-blue-500 hover:scale-110"
      >
        {title}
      </Link>
    ));

  return (
    <nav className="bg-neutral glass">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center py-2 px-1 cursor-pointer">
            <img src={Logo} alt="Logo" className="w-24 h-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {renderNavLinks()}
          </div>

          <div className="flex items-center space-x-3" ref={profileDropdownRef}>
            <div
              onClick={handleProfileClick}
              className="flex flex-col items-center  px-2 cursor-pointer"
            >
              <div
  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-cover bg-center rounded-full"
  style={{ backgroundImage: `url(${profileImage})` }}
></div>


              <span className="text-white hover:text-blue">
                {user ? user.name : "Profile"}
              </span>
            </div>
            {isProfileDropdownOpen && (
              <div className="absolute mt-4 py-2 bg-white shadow-lg rounded-sm z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 text-black cursor-pointer"
                >
                  Profile
                </Link>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 hover:bg-gray-100 text-black cursor-pointer"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100 text-black cursor-pointer"
                  >
                    Sign In/up
                  </Link>
                )}
              </div>
            )}

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mobile-menu-button"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:hidden flex-col items-center`}
          ref={mobileMenuRef}
        >
          {renderNavLinks()}
        </div>
      </div>
    </nav>
  );
}
