import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MiniNavbar from "../components/MiniNavbar";
import { UserContext } from "../contexts/UserContext";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";

export default function Account() {
  //test
  //const dburl = `http://localhost:4000/api/auth/updateProfile`
  const dburl = `https://backend-autolib.onrender.com/api/auth/updateProfile`

  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [imagePreview, setImagePreview] = useState(
    user.profilePhotoUrl || "path/to/default/image.jpg"
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => setError(""), 3000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setSelectedFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      setIsUpdating(true);
      let uploadedImageUrl = user.profilePhotoUrl;

      if (selectedFile) {
        const newImageName = v4() + selectedFile.name;
        const imageRef = ref(storage, `images/${newImageName}`);
        await uploadBytes(imageRef, selectedFile);
        uploadedImageUrl = await getDownloadURL(imageRef);
      }

      // const token = localStorage.getItem("token");
      // const config = {
      //   headers: { Authorization: `Bearer ${token}` },
      // };

      // Include the user's ID in the request
      const userId = user._id; // Assuming the user's ID is stored in the user object in context
      const response = await axios.put(
        dburl, // Adjust the URL to include the user's ID
        { userId, name, profilePhotoUrl: uploadedImageUrl }
      );

      if (response && response.data) {
        const updatedUserData = {
          ...user,
          name,
          profilePhotoUrl: uploadedImageUrl,
        };
        setUser(updatedUserData);
      }
      setIsUpdating(false);
      navigate("/profile");
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  const handleCancel = () => {
    navigate("/profile");
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
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{ pointerEvents: "none" }}
          >
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
          {error && (
            <div role="alert" className="alert alert-error text-center">
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="flex justify-between p-5">
          {!isUpdating ? (
            <>
              <button
                onClick={handleCancel}
                className="bg-yellow-500 w-2/5 text-white p-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-green-500 w-2/5 text-white p-2 rounded"
              >
                Update
              </button>
            </>
          ) : (
            <button
              disabled
              className="bg-gray-500 w-full text-white p-2 rounded flex justify-center"
            >
              <span className="loading loading-infinity loading-lg"></span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
