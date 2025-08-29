import ScrollLogger from "./components/ScrollLogger.jsx";

import KeyLogger from "./components/KeyLogger.jsx";

import Example from "./components/Example.jsx";

import Timer from "./components/Timer.jsx";

import ShowSeconds from "./components/ShowSeconds.jsx";

import MouseMove from "./components/MouseMove.jsx";

import Chat from "./components/Chat.jsx";

import ProveRef from "./components/ProveRef.jsx";

import Parent from "./components/Parent.jsx";

import { Card2 } from "./components/Card2.jsx";

import Btn from "./components/Btn.jsx";

import Chart from "./components/Chart.jsx";

function App() {
  return (
    <>
        <Chart />
      <Parent>
        <Card2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quos natus delectus cum id amet, saepe aspernatur neque, adipisci
            modi deleniti quasi, error expedita enim accusamus nemo.
            Praesentium, voluptatibus velit.
          </p>
          <Btn />
        </Card2>
      </Parent>
      {/* <ProveRef /> */}
      {/* <Chat /> */}
      {/* <MouseMove /> */}
      {/* <ShowSeconds /> */}
      {/* <Timer /> */}
      {/* <KeyLogger /> */}
      {/* <Example /> */}
    </>
  );
}

export default App;
