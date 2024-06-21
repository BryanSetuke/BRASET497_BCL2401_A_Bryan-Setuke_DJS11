import { useEffect, useState } from "react";
import { fetchShowDetail } from "../components/utils/api";
import { Link, useParams } from "react-router-dom";


const ShowDetail = () => {
    const { id } = useParams(); 
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const getShowDetail = async () => {
            try {
                const data = await fetchShowDetail(id);
                if (isMounted) {
                    setShow(data);
                     setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                }
            }
        };

        getShowDetail();

        return () => {
            isMounted = false; // Cleanup function to set isMounted to false if the component unmounts
        };
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading show details: {error.message}</div>;
    }

    return (
        <div className="show-detail">
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <div className="seasons">
                {show.seasons.map((season) => (
                    <div key={season.id} className="season-item">
                        <Link to={`/season/${season.id}`}>
                            <img src={season.image} alt={season.title} />
                            <h3>{season.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowDetail;
