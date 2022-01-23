// import './App.css';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/UI/Footer';
import ForgotPassword from './components/UI/ForgotPassword';
import LandingPage from './components/UI/LandingPage';
import Login from './components/UI/Login';
import Lyrics from './components/UI/Lyrics';
import Navbar from './components/UI/Navbar';
import Search from './components/UI/Search';
import SignUp from './components/UI/SignUp';
import Video from './components/UI/Video';

axios.defaults.withCredentials = true;
function App() {
    const font = "'Baloo Bhaijaan 2', cursive;";
    const theme = createTheme({
        typography: {
            fontFamily: font
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="forgotPassword" element={<ForgotPassword />} />
                <Route path="lyrics" element={<Lyrics />} />
                <Route
                    path="/video"
                    element={<Video embedId="rokGy0huYEA" />}
                />
                <Route path="/search" element={<Search />} />
            </Routes>
            <MinPLayer />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
