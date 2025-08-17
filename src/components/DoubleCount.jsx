import { useContext } from "react";
import { CountContext } from "./CountContext.js";

const DoubleCount = () => {
  const { count } = useContext(CountContext);
  return (
    <>
      <h2>{count * 2}</h2>
    </>
  );
};
export default DoubleCount;
