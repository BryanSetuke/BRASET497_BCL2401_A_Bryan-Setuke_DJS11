import { useState, useRef } from "react";

// AudioPlayer component that takes an audio source (src) as a prop
const AudioPlayer = ({ src }) => {
    // State to track whether the audio is playing or paused
    const [isPlaying, setIsPlaying] = useState(false);

    // useRef hook to create a reference to the audio element
    const audioRef = useRef(null);

    // Function to toggle play/pause state of the audio
    const togglePlayPause = () => {
        const prevValue = isPlaying; // Get the previous state
        setIsPlaying(!prevValue); // Toggle the state
        if (!prevValue) {
            audioRef.current.play(); // Play audio if it was previously paused
        } else {
            audioRef.current.pause(); // Pause audio if it was previously playing
        }
    };

    // Function to stop audio playback and reset time to 0
    const stopPlayback = () => {
        audioRef.current.pause(); // Pause the audio
        audioRef.current.currentTime = 0; // Reset audio time to start
        setIsPlaying(false); // Set isPlaying state to false
    };

    // Function to fast forward the audio by 10 seconds
    const fastForward = () => {
        audioRef.current.currentTime += 10; // Increase currentTime by 10 seconds
    };

    // Function to adjust the audio volume
    const adjustVolume = (e) => {
        audioRef.current.volume = e.target.value; // Set the volume to the value from the input
    };

    return (
        <div className="audio-player">
            {/* Audio element with ref and src */}
            <audio ref={audioRef} src={src} />

            {/* Play/Pause button */}
            <button onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>

            {/* Stop button */}
            <button onClick={stopPlayback}>Stop</button>

            {/* Fast Forward button */}
            <button onClick={fastForward}>Fast Forward 10s</button>

            {/* Volume slider */}
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                onChange={adjustVolume}
                defaultValue="1" // Set default volume to max
            />

            {/* Download link */}
            <a href={src} download>
                <button>Download</button>
            </a>
        </div>
    );
};

export default AudioPlayer;
