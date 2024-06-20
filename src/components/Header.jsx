import { useState } from "react";

const Header = () => {
    const [profileVisibility, setProfileVisibility] = useState("hidden");

    const handleClick = () => {
        setProfileVisibility(
            profileVisibility === "hidden" ? "visible" : "hidden"
        );
    };

    return (
        <header>
            <div>
                <div className="dropdown">
                    <button onClick={handleClick}>
                        <i
                            className="fa fa-user-circle fa-lg"
                            aria-hidden="true"
                        ></i>{" "}
                        bryan_setuke
                        <i
                            className={`fa fa-caret-${
                                profileVisibility === "hidden" ? "down" : "up"
                            }`}
                            aria-hidden="true"
                        ></i>
                    </button>
                    <ul style={{ visibility: profileVisibility }}>
                        <li>
                            <a
                                href="https://your-account-url"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Account
                                <i
                                    className="fa fa-external-link"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li>
                            <button>Profile</button>
                        </li>
                        <li>
                            <button>Log Out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
