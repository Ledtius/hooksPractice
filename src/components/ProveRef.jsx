import { useRef, useState, useEffect } from "react";

const ProveRef = () => {
  const [number, setNumber] = useState(0);

  const ref = useRef(0);
  const ref2 = useRef(null);

  const handleCLick = () => {
    // setNumber((n) => n + 1);
    ref.current++;
    console.log(ref.current);
    ref2.current.style.borderColor = "red";
  };

  useEffect(() => {
    const handleClickWindow = (e) => {
      console.log("click");
      ref2.current.style.borderColor = "";
    };

    window.addEventListener("click", handleClickWindow);

    return () => {
      window.removeEventListener("click", handleClickWindow);
    };
  }, []);

  const handleBoxClick = (e) => {
    e.stopPropagation();
    ref2.current.style.borderColor = "red";

    console.log("Click protected");
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
      <button className="p-2 bg-neutral-200 border-1" onClick={handleBoxClick}>
        Click
      </button>
      <input className="border-1" ref={ref2} type="text" />
      {/* <span>{ref.current}</span> */}
    </>
  );
};
export default ProveRef;
