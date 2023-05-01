import React, { useState, useEffect } from 'react';
import './TypingText.css';

interface Props {
    text: string;
}

export const TypingText = (props: Props) => {
    const [currentPosition, setCurrentPosition] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentPosition < props.text.length) {
                setCurrentPosition(currentPosition + 1);
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [currentPosition, props.text]);

    return (
        <div className="typing-text">
            {props.text.slice(0, currentPosition)}
            <span className="cursor"></span>
        </div>
    );
}

