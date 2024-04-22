'use client';

import { useState } from 'react';

export default function G1() {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (!isNaN(inputValue)) {
            setValue(inputValue);
            // Clear error message when user starts typing again
            setError('');
        }
    };

    const handleSubmit = () => {
        // Parse the value to ensure it's a number
        const numericValue = parseFloat(value);
        if (numericValue >= 1000) {
            // Display error message if value exceeds 1000
            setError('Input exceeds the maximum value');
        } else {
            // Perform actions on submit
            console.log("Submitted value:", value);
        }
    };

    return (
        <div id="container" className="flex flex-col justify-center items-center w-screen h-screen p-4">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md mb-2"
                placeholder="Enter a number"
            />
            {error && (
                <p className="text-red-500">{error}</p>
            )}
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Submit
            </button>
        </div>
    );
}
