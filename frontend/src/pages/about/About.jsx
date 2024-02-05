import React from 'react';
import Pic1 from "../../assets/back.jpg";
import Pic2 from "../../assets/simple.jpg";
import Pic3 from "../../assets/classic.jpg";
import "./about.css";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Discover the AutoLibrary Difference</h1>

      {/* Section 1 - Text on Left, Image on Right */}
      <div className="glass bg-yellow-100 p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg dark:bg-opacity-30 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2 lg:w-6/12">
            {/* Text content */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Empowering Your Car Buying Journey</h2>

            <p className="text-base md:text-lg leading-relaxed italic">
              At AutoLibrary, we believe in empowering our users with comprehensive, unbiased car reviews that illuminate every facet of your potential purchase. From fuel efficiency to reliability, from the roar of the engine to the sleekness of the design - immerse yourself in a world of automotive insights crafted by enthusiasts and everyday drivers alike. Let us guide you through a detailed panorama of user experiences, helping you make a choice not just with confidence, but with excitement for the road ahead.
            </p>
            {/* ... */}
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 rounded-lg overflow-hidden">
            <img src={Pic1} alt="Car" width={700} height={475} />
          </div>
        </div>
      </div>

      {/* Thin White Line */}
      <hr className="my-10 border-t border-gray-300 w-4/5 mx-auto" />

      {/* Section 2 - Image on Left, Text on Right */}
      <div className="glass bg-yellow-100 p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg dark:bg-opacity-30 mb-12">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          <div className="w-full md:w-1/2 lg:w-6/12">
            {/* Text content */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Sharing Made Simple and Effective</h2>
            <p className="text-base md:text-lg leading-relaxed italic">
              Your voice matters, and AutoLibrary offers the perfect stage. Our user-friendly platform is designed to make sharing your car experiences as simple as capturing a moment. Whether you're uploading vivid images of your latest road trip or detailing your long-term ownership experience, we ensure your story resonates. Update your reviews as your journey evolves, because every mile, every turn, tells a new chapter in your automotive adventure.
            </p>
            {/* ... */}
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 rounded-lg overflow-hidden">
            <img src={Pic2} alt="Simple Car" width={700} height={475} />
          </div>
        </div>
      </div>

      {/* Thin White Line */}
      <hr className="my-10 border-t border-gray-300 w-4/5 mx-auto" />

      {/* Section 3 - Text on Left, Image on Right */}
      <div className="glass bg-yellow-100 p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg dark:bg-opacity-30 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2 lg:w-6/12">
            {/* Text content */}
            {/* ... */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4">AI-Driven, Human-Centric Insights</h2>
            <p className="text-base md:text-lg leading-relaxed italic">
              Dive into a new era of car review experience with AutoLibrary's AI-driven insights. Our advanced algorithms synthesize user reviews into concise, easy-to-digest summaries, spotlighting a vehicle's strengths and weaknesses. But at the heart of our technology lies a human-centric approach, ensuring that each summary reflects real user experiences, bringing you closer to the car community and aiding in making informed decisions about your next car with both speed and depth.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 rounded-lg overflow-hidden">
            <img src={Pic3} alt="Classic Car" width={700} height={475} />
          </div>
        </div>
      </div>
    {/* Thin White Line */}
    <hr className="my-10 border-t border-gray-300 w-4/5 mx-auto" />
    <div className="mb-12">
        <iframe
          title='location'
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4561.188286883886!2d36.782145492124705!3d-1.2456383457177598!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2ske!4v1706715600812!5m2!1sen!2ske"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:w-3/4 lg:w-1/2 mx-auto h-auto rounded-lg shadow-lg"
        ></iframe>
      </div>
      {/* Thin White Line */}
    <hr className="my-10 border-t border-gray-300 w-4/5 mx-auto" />

      {/* Footer Text */}
      <div className="footer-animate">
        <p className="text-3xl md:text-4xl font-medium">
          We Got All The Car Info You Need Here<span className="emoji">😊</span>
        </p>
      </div>
      {/* ... additional content ... */}
    </div>
  );
}

export default About;
