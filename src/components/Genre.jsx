import React from "react";
import Episode from "./Episode"; // Assuming you have an Episode component

const Genre = ({ genre, episodes }) => {
    return (
        <div className="genre">
            <h2>{genre}</h2>
            {episodes.map((episode) => (
                <Episode key={episode.id} episode={episode} />
            ))}
        </div>
    );
};

export default Genre;
