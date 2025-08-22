import { useEffect } from "react";

function ScrollLogger() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // 🔥 cleanup
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []); // vacío: solo se agrega y se limpia una vez

  return (
    <>
      <div className="h-1000">
        <p>Desplázate para ver el efecto en consola</p>;
      </div>
    </>
  );
}

export default ScrollLogger;
