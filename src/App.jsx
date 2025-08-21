import ThemeProvider from "./components/ThemeProvider.jsx";

import ThemeButton from "./components/ThemeButton.jsx";

import Box from "./components/Box.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeButton />
        <Box>
          <h1>hola</h1>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
