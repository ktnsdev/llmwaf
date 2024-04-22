"use client";

import { useState } from "react";

export default function E1() {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const toggleCircle = () => setIsHidden(!isHidden); // Toggle visibility state

  return (
    <div
      id="container"
      className="w-screen h-screen p-4 flex flex-col items-center justify-center"
    >
      <button
        onClick={toggleCircle}
        className="p-2 bg-blue-500 text-white rounded-md focus:outline-none"
      >
        {isHidden ? "Show Circle" : "Hide Circle"}
      </button>
      <div
        className={`w-[100px] h-[100px] rounded-full bg-orange-200 ${
          isHidden ? "hidden" : ""
        }`}
      />
    </div>
  );
}
