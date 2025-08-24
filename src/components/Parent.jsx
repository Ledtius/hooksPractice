import { createContext, useState } from "react";

import useTheme from "./useTheme.js";
export const ContextTheme2 = createContext();

const Parent = ({ children }) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <ContextTheme2.Provider value={{ theme, setTheme }}>
        {children}
      </ContextTheme2.Provider>
    </>
  );
};

export default Parent;
