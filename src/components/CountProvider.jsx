import { useState } from "react";
import { CountContext } from "./CountContext.js";

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <div>
        <CountContext.Provider
          value={{ count, setCount, increment, decrement }}
        >
          <h1>CountProvider</h1>
          {children}
        </CountContext.Provider>
      </div>
    </>
  );
};

export default CountProvider;
