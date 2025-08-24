import Btn from "./Btn.jsx";
import { useContext, useRef, useEffect } from "react";
import { ContextTheme2 } from "./Parent.jsx";

export const Card2 = ({ children }) => {
  const { theme } = useContext(ContextTheme2);
  const ref = useRef(null);

  function handleInput(e) {
    if (e.key === "k") ref.current.focus();
    console.log(e.key);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleInput);

    return () => {
      window.removeEventListener("keydown", handleInput);
    };
  }, []);

  return (
    <>
      <div
        className={`shadow-2xl p-4 flex flex-col items-center w-fit ${
          theme === "dark" ? "bg-neutral-800 text-white" : "bg-white text-black"
        }`}
      >
        {children}
        <input
          className="border-1 rounded-lg p-2"
          type="text"
          ref={ref}
          onClick={handleInput}
        />
      </div>
    </>
  );
};
