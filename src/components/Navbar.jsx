import  { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-icon.png";
import "./styles/style.css"; // Ensure this is the correct path to your CSS file

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // State to track theme mode
    const menuRef = useRef(); // Reference to the popup menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode); // Toggle between dark and light mode
        document.body.classList.toggle("dark-theme"); // Toggle dark theme class on body
    };

    // Handle clicking outside the menu to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Add when the menu is open and remove when it is closed
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            // Clean up the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]); // Only re-run the effect if isMenuOpen changes

    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Podcast App Logo"
                        className="navbar-logo"
                    />
                    <span className="logo-text">UnderTree</span>
                </Link>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? "🌜" : "🌞"}{" "}
                {/* Conditional rendering for theme icon */}
            </div>
            <div className="burger-menu" onClick={toggleMenu}>
                &#9776; {/* Burger Menu Icon */}
            </div>
            {isMenuOpen && (
                <div className="popup-menu" ref={menuRef}>
                    <ul>
                        <li>
                            <Link to="/">
                                <span>🏠 Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/library">
                                <span>📚 Library</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/genres">
                                <span>🎵 Genres</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/favorites">
                                <span>❤️ Favorites</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/downloads">
                                <span>⬇️ Downloads</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/playlist">
                                <span>📋 Playlist</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <span>🔓 Login/Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
