"use client";

import { ChangeEvent, useState } from "react";

export default function G2() {
    const [value, setValue] = useState<string>("");

    function onTextInputChange(event: ChangeEvent<HTMLInputElement>) {
        if (!/^[0-9]*$/.test(event.target.value)) return;
        setValue(event.target.value);
    }

    return (
        <div id="container" className="w-screen h-screen p-4 flex justify-center items-center">
            <div className="flex gap-3 items-center">
                <input
                    type="text"
                    value={value}
                    onChange={onTextInputChange}
                    className="border border-gray-200 rounded-lg py-3 px-4"
                />
                <button className="bg-gray-200 rounded-lg py-3 px-4">Submit</button>
            </div>
        </div>
    );
}
