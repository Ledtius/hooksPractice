import { useContext } from "react";
import { CountContext } from "./CountContext.js";

const CounterButtons = () => {
  const { increment, decrement, setCount } = useContext(CountContext);
  return (
    <>
      <button
        className="border-1 p-2 bg-neutral-200 cursor-pointer"
        onClick={increment}
      >
        +1
      </button>
      <button
        className="border-1 p-2 bg-neutral-200 cursor-pointer"
        onClick={decrement}
      >
        -1
      </button>
      <button
        className="border-1 p-2 bg-neutral-200 cursor-pointer"
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </>
  );
};
export default CounterButtons;
