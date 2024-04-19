"use client";

import { useState } from "react";

export default function E1() {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    return (
        <div
            id="container"
            className="w-screen h-screen p-4 flex flex-col items-center justify-center"
        >
            {!isHidden && <div className="w-[100px] h-[100px] rounded-full bg-orange-200" />}
            <button
                className="bg-gray-200 rounded-lg py-3 px-4 mt-3"
                onClick={() => setIsHidden(!isHidden)}
            >
                Toggle
            </button>
        </div>
    );
}
