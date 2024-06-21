import React, { useState } from "react";
import Episode from "./Episode";

// Initial episodes data
const initialEpisodes = [
    {
        id: 1,
        title: "Episode 1",
        description: "This is the first episode.",
        isFavorite: false,
    },
    {
        id: 2,
        title: "Episode 2",
        description: "This is the second episode.",
        isFavorite: false,
    },
    // Add more episodes as needed
];

const Favorites = () => {
    const [episodes, setEpisodes] = useState(initialEpisodes); // State to hold episodes data

    // Function to handle toggling favorite status
    const handleFavoriteToggle = (selectedEpisode) => {
        // Update episodes state immutably
        const updatedEpisodes = episodes.map((episode) =>
            episode.id === selectedEpisode.id
                ? { ...episode, isFavorite: !episode.isFavorite }
                : episode
        );
        setEpisodes(updatedEpisodes); // Update state with updated episodes
    };

    return (
        <div>
            <h2>Episodes</h2>
            {/* Render each episode using Episode component */}
            {episodes.map((episode) => (
                <Episode
                    key={episode.id} // Unique key for React reconciliation
                    episode={episode} // Pass episode data as props
                    onFavoriteToggle={handleFavoriteToggle} // Callback function for favorite toggle
                />
            ))}
        </div>
    );
};

export default Favorites;
