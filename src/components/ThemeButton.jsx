import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider.jsx";
const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <button className="border-1 p-2 bg-neutral-200" onClick={changeTheme}>
        {theme}
      </button>
    </>
  );
};

export default ThemeButton;
