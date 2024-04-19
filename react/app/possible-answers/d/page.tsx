"use client";

import { usePathname } from "next/navigation";

export default function D1() {
    const pathname = usePathname();

    return (
        <div className="p-4 w-screen h-screen flex flex-col items-center">
            <h1 className="text-xl">Current path</h1>
            <p className="text-m">{pathname}</p>
        </div>
    );
}
