import { ContextTheme2 } from "./Parent.jsx";
import { useContext } from "react";

const Btn = () => {
  const { theme, setTheme } = useContext(ContextTheme2);

  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <button className="p-2 border-1 bg-neutral-300" onClick={handleClick}>
        {theme}
      </button>
    </>
  );
};
export default Btn;
