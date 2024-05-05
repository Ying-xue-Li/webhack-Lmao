import React, { useState } from 'react';
import purring from '../assets/purring.mp3';
import '../index.css';
import { start, pause } from '../assets';

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
            <button className='secondary-button' 
            onClick={playAudio}>
            <img src={start} alt='start button'/>
            </button>

            <button className='secondary-button' 
            onClick={pauseAudio}>
            <img src={pause} alt='pause button'/>
            </button>
        </div>
    );
}

export default AudioPlayer;
