import React, { createContext, useContext, useState } from "react";

const ActiveContext = createContext();

export const useActive = () => {
  return useContext(ActiveContext);
};

const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState("");

  const value = {
    active,
    setActive,
  };

  return (
    <ActiveContext.Provider value={value}>{children}</ActiveContext.Provider>
  );
};

export default ActiveProvider;
