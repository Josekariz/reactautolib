import { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import backgroundImage from "./assets/background.jpg"; // Adjust the path according to your file structure
import Footer from "./Footer/Footer";

export default function App() {
  // Use useEffect to wake up the service when the component mounts
  useEffect(() => {
    fetch("/wake-service")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error waking up service:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Text content */}
        <div className="flex h-full items-center justify-between">
          <div className="ml-10 max-w-md">
            <h1 className="text-4xl font-bold text-white">
              YOU ARE HERE COZ YOU LOVE AND WANT A GREAT CAR
            </h1>
            <p className="text-xl font-serif mt-4 text-right text-white">
              “LOL It might just be a Toyota”
            </p>
          </div>
        </div>

        {/* Bottom right button */}
        <div className="absolute right-10 bottom-10">
          <Link to="/reviews">
            <button className="btn btn-warning btn-wide">
              Come on, let's go find your car
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
