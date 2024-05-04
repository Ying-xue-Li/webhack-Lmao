import React, { useState } from 'react';
import purring from '../assets/purring.mp3';

function AudioPlayer() {
    const audio = new Audio(purring);
    
    const playAudio = () => {
        audio.loop = true;
        audio.play();
    };

    const pauseAudio = () => {
        audio.pause();
    };

    return (
        <div>
            <button onClick={playAudio}>▶️</button>
            <button onClick={pauseAudio}>⏸</button>
        </div>
    );
}

export default AudioPlayer;
