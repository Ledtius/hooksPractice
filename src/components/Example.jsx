import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Efecto montado");

    return () => {
      console.log("Cleanup ejecutado");
    };
  }, []);

  return <h1>Hello</h1>;
}

export default Example;
