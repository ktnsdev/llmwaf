import React, { useState } from 'react';

export default function G1() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value !== '' && parseInt(value) >= 1000) {
      setError('Input exceeds the maximum value');
    } else {
      setError(null);
    }
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Input value:', inputValue);
  };

  return (
    <div className="w-screen h-screen p-4 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <input
          type="text"
          pattern="\[0-9\]*"
          className="text-center border-2 border-gray-300 rounded-md p-2"
          placeholder="Enter numbers only"
          value={inputValue}
          onChange={handleInputChange}
        />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <button
          type="button"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}