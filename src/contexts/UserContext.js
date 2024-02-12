import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  isLoading: true,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedTime = localStorage.getItem("loginTime");

    if (storedUser && storedTime) {
      const currentTime = new Date();
      const loginTime = new Date(parseInt(storedTime));

      const hourDifference = (currentTime - loginTime) / (1000 * 60 * 60);
      if (hourDifference < 1) {
        setUser(JSON.parse(storedUser));
      } else {
        // Clear user data if more than 1 hour has passed
        localStorage.removeItem("user");
        localStorage.removeItem("loginTime");
      }
    }
    setIsLoading(false);
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("loginTime", Date.now().toString());
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("loginTime");
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
