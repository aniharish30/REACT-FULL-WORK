import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const name = "Revamp React B - 25 ";

  const [values, setValues] = useState(0);

  const fetch = async () => {
    try {
      const res = await fetch("api/path");
      const data = await res.json();

      setValues(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetch();
  }, []);

  const value = {
    name,
    values,
    setValues,
  };

  return <AppContext value={value}> {children} </AppContext>;
};
