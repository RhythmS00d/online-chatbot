"use client";

import { useState, useEffect, useContext, createContext } from "react";

const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    console.log("works", showNotification);
    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    }, 2000);

    return () => clearTimeout(notificationTimer);
  }, [showNotification]);

  return (
    <UIContext.Provider value={{ showNotification, setShowNotification }}>
      {children}
    </UIContext.Provider>
  );
};

export const UIStore = () => {
  return useContext(UIContext);
};
