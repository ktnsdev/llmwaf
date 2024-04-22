"use client";

import "./styles.module.css";

import { useEffect, useState } from "react";

export default function H() {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 50) {
                setShowToast(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            id="container"
            className="min-w-screen min-h-screen p-4 flex flex-col items-center gap-5 relative"
        >
            {showToast && (
                <div className="toast animate-fade-in absolute bottom-10 bg-gray-800 text-white px-4 py-2 rounded">
                    You've reached the bottom of the page!
                </div>
            )}

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
        </div>
    );
}
