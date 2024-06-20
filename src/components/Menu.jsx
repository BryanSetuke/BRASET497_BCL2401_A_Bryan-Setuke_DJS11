import { Link } from "react-router-dom";
import logo from "../assets/logo-icon.jpg"; 

const Menu = () => {
    return (
        <div id="menu-bar" className="menu-bar">
            <span>
                <Link to="/">
                    <img src={logo}alt="Podcast App Logo" />
                </Link>
            </span>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <button>Search</button>
                    </li>
                    <li>
                        <button>Your Library</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
