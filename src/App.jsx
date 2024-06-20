import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MainContent from "./components/MainContent";
import ShowDetail from "./components/ShowDetail";
import SeasonDetail from "./components/SeasonDetail";
import EpisodeDetail from "./components/EpisodeDetail";
import "./components/styles/style.css";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Menu />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/show/:id" element={<ShowDetail />} />
                    <Route path="/season/:id" element={<SeasonDetail />} />
                    <Route path="/episode/:id" element={<EpisodeDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
