import { useEffect, useState } from "react";
import { fetchSeasonDetail } from "../components/utils/api";
import { Link, useParams } from "react-router-dom";

const SeasonDetail = () => {
    const { id } = useParams(); // Extract the id parameter from the URL
    const [season, setSeason] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const getSeasonDetail = async () => {
            try {
                const data = await fetchSeasonDetail(id);
                if (isMounted) {
                    setSeason(data);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                }
            }
        };

        getSeasonDetail();

        return () => {
            isMounted = false; // Cleanup function to set isMounted to false if the component unmounts
        };
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading season details: {error.message}</div>;
    }

    return (
        <div className="season-detail">
            <h2>{season.title}</h2>
            <div className="episodes">
                {season.episodes.map((episode) => (
                    <div key={episode.id} className="episode-item">
                        <Link to={`/episode/${episode.id}`}>
                            <h3>{episode.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeasonDetail;
