import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
// import './App.css';
import { createTheme } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import LandingPage from './components/UI/LandingPage';
import Footer from './components/UI/Footer';
import Login from './components/UI/Login';
import SignUp from './components/UI/SignUp';
import ForgotPassword from './components/UI/ForgotPassword';
import Lyrics from './components/UI/Lyrics';
import Video from './components/UI/Video';
import Search from './components/UI/Search';
import Music from './components/UI/Music';

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
                <Route path="music" element={<Music />} />
                <Route path="/video" element={<Video />} />
                <Route path="/search" element={<Search />} />
            </Routes>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
