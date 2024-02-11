import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState(user.name); // State to store the updated name
  const [imagePreview, setImagePreview] = useState(
    user.profilePhotoUrl || "path/to/default/image.jpg"
  );
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value); // Update the name state as the user types
  };

  const handleCancel = () => {
    navigate("/profile"); // Navigate to the profile page on cancel
  };

  return (
    <>
      <Navbar />
      <MiniNavbar />
      <div className="max-w-2xl w-full mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[70vh] flex flex-col justify-between">
        <div className="relative">
          <img
            className="rounded-t-lg w-full object-cover h-auto"
            src={imagePreview}
            alt="Profile"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-white bg-black bg-opacity-50 p-2 rounded">
              Upload New Profile Photo
            </span>
          </div>
        </div>

        <div className="p-5 flex-grow">
          <input
            className="mb-2 text-xl font-semi-bold tracking-tight text-gray-900 dark:bg-white dark:text-black p-2 rounded w-full"
            value={name}
            onChange={handleNameChange}
          />
          {/* Replace h5 with input for name change */}
        </div>

        <div className="flex justify-between p-5">
          <button
            onClick={handleCancel}
            className="bg-yellow-500 w-2/5 text-white p-2 rounded" // Reduced to 40% width
          >
            Cancel
          </button>
          <button
            // onClick={handleUpdate} // Add your update logic here
            className="bg-green-500 w-2/5 text-white p-2 rounded" // Reduced to 40% width
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
