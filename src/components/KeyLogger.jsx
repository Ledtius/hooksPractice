import { useEffect, useState } from "react";

function KeyLogger() {
  const [key, setKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => setKey(e.key);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("Cleanup: removiendo evento");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key]); // cada vez que key cambia, limpia y vuelve a agregar
  // en este caso conviene [] para evitar duplicados

  return <p>Última tecla: {key}</p>;
}

export default KeyLogger;
