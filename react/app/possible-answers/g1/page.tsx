"use client";

import { ChangeEvent, useState } from "react";

export default function G1() {
    const [value, setValue] = useState<string>("");

    function onTextInputChange(event: ChangeEvent<HTMLInputElement>) {
        if (!/^[0-9]*$/.test(event.target.value)) return;
        setValue(event.target.value);
    }

    return (
        <div id="container" className="w-screen h-screen p-4 flex justify-center items-center">
            <input
                type="text"
                value={value}
                onChange={onTextInputChange}
                className="border border-gray-200 rounded-lg py-3 px-4"
            />
        </div>
    );
}
