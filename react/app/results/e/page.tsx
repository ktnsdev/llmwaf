"use client";

import { useState } from "react";

export default function E1() {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const toggleCircle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      id="container"
      className="w-screen h-screen p-4 flex flex-col items-center justify-center"
    >
      {!isHidden && <div className="w-[100px] h-[100px] rounded-full bg-orange-200" />}
      <button
        onClick={toggleCircle}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isHidden ? "Show Circle" : "Hide Circle"}
      </button>
    </div>
  );
}