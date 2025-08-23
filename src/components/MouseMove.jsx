import { useEffect, useState } from "react";
const MouseMove = () => {
  useEffect(() => {
    const handlerMouse = (e) => {
      console.log(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handlerMouse);

    return () => {
      window.removeEventListener("mousemove", handlerMouse);
    };
  }, []);

  return <></>;
};

export default MouseMove;
