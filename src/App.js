import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
// import './App.css';

import { createTheme } from '@material-ui/core'
import Navbar from './components/UI/Navbar'
import LandingPage from './components/UI/LandingPage'
import Footer from './components/UI/Footer'

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
      <LandingPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
