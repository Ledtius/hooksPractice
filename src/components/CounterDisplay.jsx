import { useContext } from "react";
import { CountContext } from "./CountContext.js";

const CounterDisplay = () => {
  const { count } = useContext(CountContext);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};
export default CounterDisplay;
