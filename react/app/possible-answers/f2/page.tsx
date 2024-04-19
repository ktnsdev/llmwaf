"use client";

import { useState } from "react";

export default function F2() {
    const [count, setCount] = useState<number>(1);

    function showAlert() {
        alert(`You've got an email (${count})`);
        setCount(count + 1);
    }

    return (
        <div
            id="container"
            className="w-screen h-screen p-4 flex flex-col items-center justify-center"
        >
            <button className="bg-gray-200 rounded-lg py-3 px-4 mt-3" onClick={showAlert}>
                Show alert
            </button>
        </div>
    );
}
