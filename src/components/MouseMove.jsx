import { useEffect, useState } from "react";
const MouseMove = () => {
  useEffect(() => {
    const handlerMouse = (e) => {
      console.log(e.clientX, e.clientY);
    };
    addEventListener("mousemove", handlerMouse);

    return () => {
      removeEventListener("mousemove", handlerMouse);
    };
  }, []);

  return <></>;
};

export default MouseMove;
