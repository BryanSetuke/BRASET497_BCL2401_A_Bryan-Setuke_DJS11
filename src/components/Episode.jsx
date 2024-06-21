import React, { useState } from "react";
import Episode from "./Episode";

const EpisodeList = () => {
    // State to hold the list of episodes
    const [episodes, setEpisodes] = useState([
        {
            id: 1,
            title: "Episode 1",
            description: "Description for episode 1",
            isFavorite: false,
        },
        {
            id: 2,
            title: "Episode 2",
            description: "Description for episode 2",
            isFavorite: false,
        },
        // Add more episodes as needed
    ]);

    // Function to handle toggling the favorite status of an episode
    const handleFavoriteToggle = (toggledEpisode) => {
        setEpisodes((prevEpisodes) =>
            prevEpisodes.map((episode) =>
                episode.id === toggledEpisode.id
                    ? { ...episode, isFavorite: !episode.isFavorite }
                    : episode
            )
        );
    };

    return (
        <div className="episode-list">
            {/* Rendering each episode component */}
            {episodes.map((episode) => (
                <Episode
                    key={episode.id} // Unique key for React's reconciliation
                    episode={episode} // Passing episode data as props
                    onFavoriteToggle={handleFavoriteToggle} // Callback function to handle favorite toggle
                />
            ))}
        </div>
    );
};

export default EpisodeList;
