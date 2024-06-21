import { useState, useRef } from "react";

const AudioPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const stopPlayback = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    const fastForward = () => {
        audioRef.current.currentTime += 10;
    };

    const adjustVolume = (e) => {
        audioRef.current.volume = e.target.value;
    };

    return (
        <div className="audio-player">
            <audio ref={audioRef} src={src} />
            <button onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <button onClick={stopPlayback}>Stop</button>
            <button onClick={fastForward}>Fast Forward 10s</button>
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                onChange={adjustVolume}
                defaultValue="1"
            />
            <a href={src} download>
                <button>Download</button>
            </a>
        </div>
    );
};

export default AudioPlayer;
