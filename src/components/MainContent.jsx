import { useEffect, useState } from "react";
import { fetchShows } from "../components/utils/api";
import ShowList from "./ShowList";

const MainContent = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getShows = async () => {
            const data = await fetchShows();
            setShows(data);
            setLoading(false);
        };
        getShows();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main-content">
            <h2>All Shows</h2>
            <ShowList shows={shows} />
        </div>
    );
};

export default MainContent;
