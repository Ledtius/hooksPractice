import Count from "./components/Count.jsx";
import CountProvider from "./components/CountProvider.jsx";

import DoubleCount from "./components/DoubleCount.jsx";

import CounterDisplay from "./components/CounterDisplay.jsx";

import CounterButtons from "./components/CounterButtons.jsx";

function App() {
  return (
    <>
      <CountProvider>
        <Count />
        <DoubleCount />
        <br />

        <CounterDisplay />
        <CounterButtons />
      </CountProvider>
    </>
  );
}

export default App;
