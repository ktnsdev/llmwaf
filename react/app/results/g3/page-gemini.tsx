import { useState } from 'react';

export default function G1() {
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const numberInput = event.target.elements.numberInput.value;

    if (numberInput > 1000) {
      setErrorMessage('Input exceeds the maximum value');
    } else {
      setErrorMessage(''); // Clear error message if valid
      // Handle your actual form submission logic here (e.g., sending data to server)
    }
  };

  return (
    <div id="container" className="w-screen h-screen flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="flex">
        <label htmlFor="numberInput">Enter a number:</label>
        <input
          type="number"
          id="numberInput"
          name="numberInput"
          className="border rounded px-2 py-1 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">
          Submit
        </button>
      </form>
      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
    </div>
  );
}
