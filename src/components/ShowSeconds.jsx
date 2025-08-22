import { useState, useEffect } from "react";

const ShowSeconds = () => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    function handleSeconds() {
      setSec((prev) => prev + 1);
    }

    const interval = setInterval(handleSeconds, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h1>Time: {sec}</h1>
    </>
  );
};

export default ShowSeconds;
