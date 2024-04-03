"use client";

import { useState } from "react";

export default function B1() {
    const [time, _] = useState<Date>(new Date());

    return (
        <div
            id="container"
            className="w-screen h-screen p-4 flex flex-col items-center justify-center gap-4"
        >
            <h1 className="text-xl font-bold">
                Good {time.getHours() < 12 ? "morning" : "afternoon"}
            </h1>
            <p className="text-m text-grey-700">{`${time.getHours()}:${String(
                time.getMinutes()
            ).padStart(2, "0")}`}</p>
            <div className="w-[100px] h-[100px] rounded-full bg-orange-200" />
        </div>
    );
}
