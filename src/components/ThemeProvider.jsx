import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div className={theme === "light" ? "bg-red-500" : "bg-neutral-500"}>
          {children}
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
