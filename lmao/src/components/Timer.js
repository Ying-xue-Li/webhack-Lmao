import React, { useEffect, useState } from 'react';
import './Timer.css';

export const Timer = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [inputMin, setInputMin] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    let timer;

    useEffect(() => {
        if (isRunning) {
            timer = setInterval(() => {
                if (sec === 0 && min === 0) {
                    clearInterval(timer);
                    setIsRunning(false);
                } else if (sec === 0) {
                    setMin(prevMin => prevMin - 1);
                    setSec(59);
                } else {
                    setSec(prevSec => prevSec - 1);
                }
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning, sec, min]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const restart = () => {
        setMin(inputMin);
        setSec(0);
        setIsRunning(false);
        setIsEditing(false);
    };

    const handleTimeClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setInputMin(parseInt(e.target.value, 10));
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            restart();
        }
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };

    return (
        <div className="timer">
            <div className='container'>
                <div className='timer_container'>
                    <h1>Timer</h1>
                    <div
                        onClick={handleTimeClick}
                        className={`timer_display ${isEditing ? 'editing' : ''}`}
                    >
                        {isEditing ? (
                            <input
                                type="number"
                                value={inputMin}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                onKeyDown={handleInputKeyDown}
                                autoFocus 
                            />
                        ) : (
                            <h1>{min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}</h1>
                        )}
                    </div>
                    <div>
                        {!isRunning ? (
                            <button className='restart' onClick={startTimer}>start</button>
                        ) : (
                            <button className='stop' onClick={pauseTimer}>pause</button>
                        )}
                        <button className='restart' onClick={restart}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
