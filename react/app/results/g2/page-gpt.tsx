import { useState } from 'react';

export default function G1() {
    const [value, setValue] = useState('');

    // Function to handle input change
    const handleChange = (event) => {
        const inputValue = event.target.value;
        // Check if the input value is numerical
        if (!isNaN(inputValue)) {
            // Update the state if it's numerical
            setValue(inputValue);
        }
    };

    // Function to handle submit
    const handleSubmit = () => {
        // Perform actions on submit
        console.log("Submitted value:", value);
    };

    return (
        <div id="container" className="flex justify-center items-center w-screen h-screen p-4">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter a number"
            />
            <button
                onClick={handleSubmit}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Submit
            </button>
        </div>
    );
}
