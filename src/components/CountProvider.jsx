import { useState } from "react";
import { CountContext } from "./CountContext.js";

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <CountContext.Provider value={{ count, setCount, increment }}>
          <h1>CountProvider</h1>
          {children}
        </CountContext.Provider>
      </div>
    </>
  );
};

export default CountProvider;
