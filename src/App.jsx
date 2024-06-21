import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ShowDetail from "./components/ShowDetail";
import SeasonDetail from "./components/SeasonDetail";
import EpisodeDetail from "./components/EpisodeDetail";
import Greeting from "./components/Greeting";
import Favorites from "./components/Favorites";
import "./components/styles/style.css";

// Example downloadable content



function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Greeting />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/show/:id" element={<ShowDetail />} />
                    <Route path="/season/:id" element={<SeasonDetail />} />
                    <Route path="/episode/:id" element={<EpisodeDetail />} />
                    <Route path="/favorites" element={<Favorites />} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
