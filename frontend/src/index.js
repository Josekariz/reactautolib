import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Routing from "./Routing";
import { UserProvider } from "./contexts/UserContext";

// Create a QueryClient instance


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      
      {/* Wrap with QueryClientProvider */}
      <BrowserRouter>
        <UserProvider>
          {" "}
          {/* Wrap Routing with UserProvider */}
          <Routing />
        </UserProvider>
      </BrowserRouter>
    
  </React.StrictMode>
);
