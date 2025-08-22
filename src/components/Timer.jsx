import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup
    return () => clearInterval(interval);
  }, []); // se ejecuta solo una vez

  return <h1>Time: {seconds}</h1>;
}

export default Timer;
