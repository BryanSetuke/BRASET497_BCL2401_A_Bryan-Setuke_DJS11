import React, { useState } from "react";
import Episode from "./Episode";

const EpisodeList = () => {
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
            {episodes.map((episode) => (
                <Episode
                    key={episode.id}
                    episode={episode}
                    onFavoriteToggle={handleFavoriteToggle}
                />
            ))}
        </div>
    );
};

export default EpisodeList;
