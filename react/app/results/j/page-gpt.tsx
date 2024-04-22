'use client';

import { useState } from 'react';
import './styles.module.css';

export default function J() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            id="container"
            className="p-4 w-screen h-screen flex flex-col items-center justify-center"
        >
            <button
                className={`px-4 py-3 rounded-md ${isHovered ? 'rainbow-bg' : 'bg-gray-200'}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                Hover me
            </button>
        </div>
    );
}
