import { useState, useRef, useEffect } from "react";

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }; 

    const handleTimeUpdate = () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgress((currentTime / duration) * 100);
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
        setProgress(0);
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener("ended", handleAudioEnd);
        return () => {
            audio.removeEventListener("ended", handleAudioEnd);
        };
    }, []);

    return (
        <div className="audio-player">
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
            ></audio>
            <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? "Pause" : "Play"}
            </button>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default AudioPlayer;
