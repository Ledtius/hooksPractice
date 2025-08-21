import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider.jsx";

const Box = ({ children, prove }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`border-1 w-20 h-20 p-2 ${
          theme === "light"
            ? "border-red-400 bg-amber-200 text-white"
            : "border-neutral-400 bg-gray-200 text-red-500 text-2xl"
        }`}
      >
        {children}
      </div>
      {prove}
    </>
  );
};

export default Box;
