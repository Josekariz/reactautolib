import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import Prof from "../assets/profileholder.png";

export default function Navbar({ userProfile }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const profileImage = userProfile ? userProfile.image : Prof;
    const dropdownRef = useRef(null);

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
      <nav className="bg-neutral glass">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center py-2 px-1 cursor-pointer">
              <img src={Logo} alt="Logo" width={100} height={100} />
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {["/", "/reviews", "/about", "/contact"].map((path, index) => (
                <Link key={index} to={path} className="py-5 px-3 text-white text-lg navbar-link hover:text-blue-500 hover:scale-110">
                  {['Home', 'Reviews', 'About Us', 'Contact Us'][index]}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3" ref={dropdownRef}>
              <div onClick={handleProfileClick} className="flex flex-col items-center py-5 px-2 cursor-pointer">
                <img src={profileImage} alt="Profile" width={30} height={30} />
                <span className="text-base-100">{userProfile ? userProfile.name : 'Username'}</span>
              </div>
              {isProfileDropdownOpen && (
                <div className="absolute mt-12 py-2 bg-white shadow-lg rounded-sm">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">My Account</Link>
                  <span className="block px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">{userProfile ? 'Sign Out' : 'Sign In'}</span>
                </div>
              )}

              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center`} ref={dropdownRef}>
            {["/", "/reviews", "/about", "/contact"].map((path, index) => (
              <Link key={index} to={path} className="block py-2 px-4 text-sm text-base-100 navbar-link hover:text-blue-500 hover:scale-110">
                {['Home', 'Reviews', 'About Us', 'Contact Us'][index]}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
}
