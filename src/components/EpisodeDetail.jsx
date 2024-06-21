import { useEffect, useState } from "react";
import { fetchEpisodeDetail } from "../components/utils/api";
import { useParams } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";

const EpisodeDetail = () => {
    const { id } = useParams(); // Extract the id parameter from the URL
    const [episode, setEpisode] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const getEpisodeDetail = async () => {
            try {
                const data = await fetchEpisodeDetail(id);
                if (isMounted) {
                    setEpisode(data);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                }
            }
        };

        getEpisodeDetail();

        return () => {
            isMounted = false; // Cleanup function to set isMounted to false if the component unmounts
        };
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading episode details: {error.message}</div>;
    }

    if (!episode) {
        return <div>No episode data available.</div>;
    }

    return (
        <div className="episode-detail">
            <h2>{episode.title}</h2>
            <AudioPlayer src={episode.file} />
        </div>
    );
};

export default EpisodeDetail;
