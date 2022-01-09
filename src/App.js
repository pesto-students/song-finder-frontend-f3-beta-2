import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
// import './App.css';

import { createTheme } from '@material-ui/core'
import Navbar from './components/UI/Navbar'
import LandingPage from './components/UI/LandingPage'
import Footer from './components/UI/Footer'
import Login from './components/UI/Login'
import SignUp from './components/UI/SignUp'
import { Routes, Route } from 'react-router-dom'
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
      <Routes>
        <Route exact path='/' element={<LandingPage />
        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
      {/* 
     
 
      <Login /> */}
    </ThemeProvider>
  );
}

export default App;
