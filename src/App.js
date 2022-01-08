import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
// import './App.css';
import Navbar from './components/UI/Navbar'
import { createTheme } from '@material-ui/core'
function App() {
  const font = "'Baloo Bhaijaan 2', cursive;";
  const theme = createTheme({
    typography: {
      fontFamily: font,
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
