import React, { useEffect, useState } from 'react';
import './Timer.css';
import '../index.css';

export const Timer = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [inputMin, setInputMin] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    // const timer = useRef(null);

    useEffect(() => {
        let IntervalId;
        if (isRunning) {
            IntervalId = setInterval(() => {
                if (sec === 0 && min === 0) {
                    clearInterval(IntervalId);
                    setIsRunning(false);
                } else if (sec === 0) {
                    setMin(prevMin => prevMin - 1);
                    setSec(59);
                } else {
                    setSec(prevSec => prevSec - 1);
                }
            }, 1000);
        }

        return () => clearInterval(IntervalId);
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
        <section className="timer">
            <div className='container'>
                <div className='timer-container'>
                    <h3 className='heading-style-headline'>Timer</h3>

                    <div
                        onClick={handleTimeClick}
                        className={`timer_display ${isEditing ? 'editing' : ''}`}
                    >
                        {isEditing ? (
                            <input
                                className='input-field'
                                style={{ color: '#EFEFEF' }}
                                type="number"
                                value={inputMin}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                onKeyDown={handleInputKeyDown}
                                autoFocus 
                            />
                        ) : (
                            <h3 className='heading-style-headline'>{min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}</h3>
                        )}
                    </div>

                    <div className='button-wrapper'>
                        {!isRunning ? (
                            <button className='secondary-button' onClick={startTimer}>Start</button>
                        ) : (
                            <button className='secondary-button' onClick={pauseTimer}>Pause</button>
                        )}
                        <button className='secondary-button' onClick={restart}>Reset</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
