import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p className="loading-message">
        <span className="message-text">👉👈 Please be a little patient, your results are on the way 🤗</span>
      </p>
    </div>
  );
};

export default Loading;

