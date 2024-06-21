// Greeting.jsx
import React from "react";

const Greeting = () => {
    const hours = new Date().getHours();
    const greeting =
        hours < 12 ? "Morning" : hours < 17 ? "Afternoon" : "Evening";

    return (
        <div className="greeting">
            <h2>Good {greeting}</h2>
        </div>
    );
};

export default Greeting;
