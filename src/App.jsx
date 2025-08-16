import { useState } from "react";
import Box from "./components/Box.jsx";
import CountProvider from "./components/CountProvider.jsx";
import Count from "./components/Count.jsx";

function App() {
  const [prove, setProve] = useState("Proved");
  return (
    <>
      <CountProvider>
        <Count />
      </CountProvider>
    </>
  );
}

export default App;
