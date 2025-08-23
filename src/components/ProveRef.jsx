import { useRef, useState, useEffect } from "react";

const ProveRef = () => {
  const [number, setNumber] = useState(0);

  const ref = useRef(0);
  const ref2 = useRef(null);

  const handleCLick = () => {
    // setNumber((n) => n + 1);
    ref.current++;
    console.log(ref.current);
    console.log();
    ref2.current.style.borderColor = "red";
  };
  useEffect(() => {
    console.log("First render");
    console.log(number);
  }, []);

  useEffect(() => {
    console.log("Re-render");
    console.log(number);
  });
  return (
    <>
      <button className="p-2 bg-neutral-200 border-1" onClick={handleCLick}>
        Click
      </button>
      <input className="border-1" ref={ref2} type="text" />
      {/* <span>{ref.current}</span> */}
    </>
  );
};
export default ProveRef;
