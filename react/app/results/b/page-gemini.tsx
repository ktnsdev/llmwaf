"use client";

import { useState } from "react";

export default function B1() {
  const [time, setTime] = useState<Date>(new Date());

  useState(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="container"
      style={{
        backgroundColor: "lightgreen",
        filter: "blur(5px)", // adjust blur amount as needed
        width: "100vw", // ensure full screen width
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
      }}
    >
      <h1 className="text-xl font-bold">
        Good {time.getHours() < 12 ? "morning" : "afternoon"}
      </h1>
      <p className="text-m text-grey-700">
        {`${time.getHours()}:${String(time.getMinutes()).padStart(2, "0")}`}
      </p>
      <div className="w-[100px] h-[100px] rounded-full bg-orange-200" />
    </div>
  );
}
