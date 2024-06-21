import React, { useState } from "react";
import Episode from "./Episode";

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
    const [episodes, setEpisodes] = useState(initialEpisodes);

    const handleFavoriteToggle = (selectedEpisode) => {
        const updatedEpisodes = episodes.map((episode) => {
            if (episode.id === selectedEpisode.id) {
                return { ...episode, isFavorite: !episode.isFavorite };
            }
            return episode;
        });
        setEpisodes(updatedEpisodes);
    };

    return (
        <div>
            <h2>Episodes</h2>
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

export default Favorites;
