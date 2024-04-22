import Head from 'next/head';

export default function A1() {
    return (
        <div id="container" className="flex justify-center items-center h-screen">
            <Head>
                <title>Next.js 14 Example</title>
            </Head>
            <div className="text-center">
                <h1 className="text-4xl">Hello</h1>
                <p className="text-base mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
}
