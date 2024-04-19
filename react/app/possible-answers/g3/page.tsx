"use client";

import { ChangeEvent, useState } from "react";

export default function G3() {
    const [value, setValue] = useState<string>("");
    const [isErrorShown, setIsErrorShown] = useState<boolean>(false);

    function onTextInputChange(event: ChangeEvent<HTMLInputElement>) {
        if (!/^[0-9]*$/.test(event.target.value)) return;
        setValue(event.target.value);
    }

    function onSubmit(value: string) {
        const number = parseInt(value);
        setIsErrorShown(number >= 1000);
    }

    return (
        <div
            id="container"
            className="w-screen h-screen p-4 flex flex-col justify-center items-center"
        >
            <div className="flex gap-3 items-center">
                <input
                    type="text"
                    value={value}
                    onChange={onTextInputChange}
                    className="border border-gray-200 rounded-lg py-3 px-4"
                />
                <button
                    className="bg-gray-200 rounded-lg py-3 px-4"
                    onClick={() => onSubmit(value)}
                >
                    Submit
                </button>
            </div>
            {isErrorShown && <p className="text-red-400">Input exceeds the maximum value</p>}
        </div>
    );
}
