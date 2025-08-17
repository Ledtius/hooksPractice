import Count from "./components/Count.jsx";
import CountProvider from "./components/CountProvider.jsx";

import DoubleCount from "./components/DoubleCount.jsx";

function App() {
  return (
    <>
      <CountProvider>
        <Count />
        <DoubleCount />
      </CountProvider>
    </>
  );
}

export default App;
