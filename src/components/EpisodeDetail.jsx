import { useEffect, useState } from "react";
import { fetchEpisodeDetail } from "../components/utils/api";
import { useParams } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";

const EpisodeDetail = () => {
    const { id } = useParams(); // Extract the id parameter from the URL
    const [episode, setEpisode] = useState(null); // State to hold the episode data
    const [loading, setLoading] = useState(true); // State to track loading state
    const [error, setError] = useState(null); // State to track error state

    useEffect(() => {
        let isMounted = true; // Flag to track if the component is mounted

        // Function to fetch episode details
        const getEpisodeDetail = async () => {
            try {
                const data = await fetchEpisodeDetail(id); // Fetch episode details using API function
                if (isMounted) {
                    setEpisode(data); // Update episode state with fetched data
                    setLoading(false); // Set loading state to false
                }
            } catch (err) {
                if (isMounted) {
                    setError(err); // Set error state if there's an error
                    setLoading(false); // Set loading state to false
                }
            }
        };

        getEpisodeDetail(); // Call the function to fetch episode detail upon component mount

        // Cleanup function to handle component unmount
        return () => {
            isMounted = false; // Set isMounted to false when component unmounts to avoid memory leaks
        };
    }, [id]); // Dependency array ensures useEffect runs when id changes

    // Loading state: Display "Loading..." message
    if (loading) {
        return <div>Loading...</div>;
    }

    // Error state: Display error message
    if (error) {
        return <div>Error loading episode details: {error.message}</div>;
    }

    // No episode data state: Display message if episode data is null
    if (!episode) {
        return <div>No episode data available.</div>;
    }

    // Render episode details if everything is loaded successfully
    return (
        <div className="episode-detail">
            <h2>{episode.title}</h2>
            <AudioPlayer src={episode.file} />{" "}
            {/* Render AudioPlayer component with episode file URL */}
        </div>
    );
};

export default EpisodeDetail;
