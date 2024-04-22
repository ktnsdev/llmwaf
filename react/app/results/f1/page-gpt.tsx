import React from 'react';

export default function F1() {
    function showAlert() {
        alert("You've got an email");
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
