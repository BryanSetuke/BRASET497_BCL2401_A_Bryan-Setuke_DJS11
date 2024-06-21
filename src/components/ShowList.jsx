import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchShows } from "../components/utils/api"; // Assuming fetchShows is a function that fetches the shows from the API

const ShowList = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState("mostRecent");

    useEffect(() => {
        const loadShows = async () => {
            try {
                const response = await fetchShows();
                setShows(response);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadShows();
    }, []);

    const sortShows = (order) => {
        let sortedShows;
        switch (order) {
            case "mostRecent":
                sortedShows = [...shows].sort(
                    (a, b) => new Date(b.updated) - new Date(a.updated)
                );
                break;
            case "leastRecent":
                sortedShows = [...shows].sort(
                    (a, b) => new Date(a.updated) - new Date(b.updated)
                );
                break;
            case "aToZ":
                sortedShows = [...shows].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
                break;
            case "zToA":
                sortedShows = [...shows].sort((a, b) =>
                    b.title.localeCompare(a.title)
                );
                break;
            default:
                sortedShows = shows;
        }
        return sortedShows;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading shows: {error.message}</div>;
    }

    const sortedShows = sortShows(sortOrder);

    return (
        <div className="show-list">
            <div className="sorting-buttons">
                <button onClick={() => setSortOrder("mostRecent")}>
                    Most Recent
                </button>
                <button onClick={() => setSortOrder("leastRecent")}>
                    Least Recent
                </button>
                <button onClick={() => setSortOrder("aToZ")}>A-Z</button>
                <button onClick={() => setSortOrder("zToA")}>Z-A</button>
            </div>
            {sortedShows.map((show) => (
                <div key={show.id} className="show-item">
                    <Link to={`/show/${show.id}`}>
                        <img src={show.image} alt={show.title} />
                        <h3>{show.title}</h3>
                        <p>Seasons: {show.seasons}</p>
                        <p>
                            Last Updated:{" "}
                            {new Date(show.updated).toLocaleDateString()}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ShowList;
