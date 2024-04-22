"use client";

import { useRouter } from "next/router";

export default function D1() {
    const router = useRouter();
    const currentPath = router.asPath;

    return (
        <div className="p-4 w-screen h-screen flex flex-col items-center">
            <h1 className="text-xl">Current path</h1>
            <p>{currentPath}</p>
        </div>
    );
}
