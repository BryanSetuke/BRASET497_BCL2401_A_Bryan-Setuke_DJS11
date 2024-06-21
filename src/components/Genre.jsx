const Genre = ({ genre, episodes }) => {
    return (
        <div className="genre">
            <h2>{genre}</h2>
            {episodes.map((episode) => (
                <div key={episode.id} className="episode">
                    <h3>{episode.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default Genre;
