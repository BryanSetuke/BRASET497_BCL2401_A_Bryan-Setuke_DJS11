import React from "react";

const Episode = ({ episode, onFavoriteToggle }) => {
    return (
        <div className="episode">
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
            <button onClick={() => onFavoriteToggle(episode)}>
                {episode.isFavorite
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
            </button>
        </div>
    );
};

export default Episode;
