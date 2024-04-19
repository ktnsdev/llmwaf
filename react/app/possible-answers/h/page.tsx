"use client";

import { useEffect, useRef, useState } from "react";

export default function H() {
    const ref = useRef<HTMLDivElement>(null);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState<boolean>(false);

    useEffect(() => {
        if (ref.current) {
            window.addEventListener("scroll", onScroll);

            return () => {
                window.removeEventListener("scroll", onScroll);
            };
        }
    }, []);

    function onScroll() {
        if (!ref.current) return;
        setIsScrolledToBottom(window.innerHeight + window.scrollY >= ref.current.scrollHeight);
    }

    return (
        <div
            ref={ref}
            id="container"
            className="relative min-w-screen min-h-screen p-4 flex flex-col items-center gap-5"
        >
            <section>
                <h2 className="text-2xl font-bold">Section 1</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 2</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 3</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <img
                    src="https://source.unsplash.com/random/800x600"
                    alt="Random"
                    className="w-full"
                />
                <h2 className="text-2xl font-bold">Section 4</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 5</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 6</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 7</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 8</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 9</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 10</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>

                <img
                    src="https://source.unsplash.com/random/800x600"
                    alt="Random"
                    className="w-full"
                />
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 11</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 12</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>

                <img
                    src="https://source.unsplash.com/random/800x600"
                    alt="Random"
                    className="w-full"
                />
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 13</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 14</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>

                <img
                    src="https://source.unsplash.com/random/800x600"
                    alt="Random"
                    className="w-full"
                />
            </section>

            <section>
                <h2 className="text-2xl font-bold">Section 15</h2>
                <p className="text-m text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas, magni
                    architecto laborum suscipit, voluptate doloribus, minus atque impedit nostrum
                    numquam maxime dolore! Magni expedita libero natus nobis, distinctio placeat?
                </p>
            </section>

            <div
                className={`fixed top-0 left-0 m-3 p-3 bg-green-200 rounded-md transition-all pointer-events-none ${
                    isScrolledToBottom ? "opacity-100" : "opacity-0"
                }`}
            >
                Scrolled to bottom!
            </div>
        </div>
    );
}
