import { useState } from 'react';

export default function F1() {
  const [count, setCount] = useState(0);

  function showAlert() {
    setCount(count + 1);
    alert(`You've got an email ${count > 0 ? `(${count})` : ''}`);
  }

  return (
    <div
      id="container"
      className="w-screen h-screen p-4 flex flex-col items-center justify-center"
    >
      <button onClick={showAlert}>Check Email</button>
    </div>
  );
}
