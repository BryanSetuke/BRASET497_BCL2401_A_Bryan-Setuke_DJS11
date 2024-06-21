const Greeting = () => {
    const hours = new Date().getHours();
    console.log("Current hour:", hours); // This line logs the current hour to the console

    const greeting =
        hours < 12 ? "Morning" : hours < 17 ? "Afternoon" : "Evening";

    return (
        <div className="greeting">
            <h2>Good {greeting}</h2>
        </div>
    );
};

export default Greeting;
