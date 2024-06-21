import { useState, useEffect } from "react";
import Genre from "./Genre";

const GenresGallery = ({ episodes }) => {
    const [groupedEpisodes, setGroupedEpisodes] = useState({});

    useEffect(() => {
        if (!episodes) return;

        const groupByGenre = episodes.reduce((acc, episode) => {
            const { genre } = episode;
            if (!acc[genre]) {
                acc[genre] = [];
            }
            acc[genre].push(episode);
            return acc;
        }, {});

        setGroupedEpisodes(groupByGenre);
    }, [episodes]);

    return (
        <div>
            {Object.keys(groupedEpisodes).map((genre) => (
                <Genre
                    key={genre}
                    genre={genre}
                    episodes={groupedEpisodes[genre]}
                />
            ))}
        </div>
    );
};

export default GenresGallery;
