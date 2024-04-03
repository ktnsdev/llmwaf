"use client";

import { useEffect, useState } from "react";

export default function L() {
    const [data, setData] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            await getData();
        })();
    }, []);

    async function getData(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                setData(true);
            }, 2000);
        });
    }

    return (
        <div
            id="container"
            className="p-4 w-screen h-screen flex flex-col items-center justify-center"
        >
            {/* TODO */}
        </div>
    );
}
