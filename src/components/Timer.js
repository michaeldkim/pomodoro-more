// Timer.js
import React, { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
    const initialMinutes = 25;
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                } else if (minutes > 0) {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                    setSeconds(59);
                } else {
                    clearInterval(interval);
                    setIsActive(false);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);

    const toggleTimer = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(initialMinutes);
        setSeconds(0);
    };

    return (
        <div className='flex-col'>
            <div className='flex justify-center bg-white text-black text-5xl'>
                <p className="bg-inherit text-black">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
            </div>
            <div className='space-x-2 bg-white text-black'>
                <button onClick={toggleTimer}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
