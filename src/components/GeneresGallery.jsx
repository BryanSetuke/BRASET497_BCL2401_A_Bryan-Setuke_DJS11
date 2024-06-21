import { useState, useEffect } from "react";
import Genre from "./Genre";

const GenresGallery = ({ episodes }) => {
    const [groupedEpisodes, setGroupedEpisodes] = useState({}); // State to hold grouped episodes by genre

    useEffect(() => {
        if (!episodes) return; // Return early if episodes are not provided or null

        // Function to group episodes by genre
        const groupByGenre = episodes.reduce((acc, episode) => {
            const { genre } = episode;
            if (!acc[genre]) {
                acc[genre] = [];
            }
            acc[genre].push(episode);
            return acc;
        }, {});

        setGroupedEpisodes(groupByGenre); // Update state with grouped episodes
    }, [episodes]); // Trigger effect whenever episodes change

    return (
        <div>
            {/* Render Genre component for each genre */}
            {Object.keys(groupedEpisodes).map((genre) => (
                <Genre
                    key={genre} // Unique key for React reconciliation
                    genre={genre} // Pass genre name as prop
                    episodes={groupedEpisodes[genre]} // Pass episodes belonging to this genre as prop
                />
            ))}
        </div>
    );
};

export default GenresGallery;
