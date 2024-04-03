"use client";

import { useState } from "react";

export default function E1() {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    return (
        <div
            id="container"
            className="w-screen h-screen p-4 flex flex-col items-center justify-center"
        >
            <div className="w-[100px] h-[100px] rounded-full bg-orange-200" />
            {/* TODO */}
        </div>
    );
}
