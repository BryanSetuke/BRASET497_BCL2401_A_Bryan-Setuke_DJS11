import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchShows } from "../components/utils/api"; // Assuming fetchShows is a function that fetches the shows from the API

const ShowList = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading shows: {error.message}</div>;
    }

    return (
        <div className="show-list">
            {shows.map((show) => (
                <div key={show.id} className="show-item">
                    <Link to={`/show/${show.id}`}>
                        <img src={show.image} alt={show.title} />
                        <h3>{show.title}</h3>
                        {/* <p>{show.description}</p> */}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ShowList;
