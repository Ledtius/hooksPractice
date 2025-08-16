import { useContext } from "react";
import { CountContext } from "./CountContext.js";

const Count = () => {
  const { count, setCount, increment } = useContext(CountContext);

  return (
    <>
      <h1>{count}</h1>
      <button className="border-1 p-2 bg-neutral-200 cursor-pointer" onClick={increment}>
        Btn
      </button>
    </>
  );
};
export default Count;
