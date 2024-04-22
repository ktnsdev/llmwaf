"use client";

import React, { useEffect, useState } from "react";

const Toast = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShow(true);
                    }
                });
            },
            { rootMargin: "0px", threshold: 1.0 }
        );

        const target = document.querySelector("#container");
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 p-4 bg-green-500 text-white transition-all duration-500 ${
                show ? "opacity-100" : "opacity-0 -translate-y-full"
            }`}
        >
            <p>You've reached the bottom of the page!</p>
        </div>
    );
};

export default Toast;
