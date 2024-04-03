import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
    return (
        <main className="p-4 w-screen h-screen flex flex-col items-center justify-center gap-3">
            <h1>Next.js test cases</h1>
            <div className="flex flex-col gap-3 items-center justify-center">
                <Button href="/results/a">A</Button>
                <Button href="/results/b">B</Button>
                <Button href="/results/c">C</Button>
                <Button href="/results/d">D</Button>
                <Button href="/results/e">E</Button>
                <Button href="/results/f">F</Button>
                <Button href="/results/g">G</Button>
                <Button href="/results/h">H</Button>
                <Button href="/results/i">I</Button>
                <Button href="/results/j">J</Button>
                <Button href="/results/k">K</Button>
                <Button href="/results/l">L</Button>
            </div>
        </main>
    );
}

interface ButtonProps {
    children: ReactNode;
    href: string;
}

function Button(props: ButtonProps) {
    return (
        <Link href={props.href}>
            <button className="px-4 py-3 bg-gray-200 rounded-md">{props.children}</button>
        </Link>
    );
}
