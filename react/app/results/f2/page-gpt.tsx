import React, { useState } from 'react';

export default function F1() {
    const [count, setCount] = useState(0);

    function showAlert() {
        alert(`You've got an email (${count} times)`);
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div
            id="container"
            className="w-screen h-screen p-4 flex flex-col items-center justify-center"
        >
            <button onClick={showAlert}>Show Email Alert</button>
        </div>
    );
}
