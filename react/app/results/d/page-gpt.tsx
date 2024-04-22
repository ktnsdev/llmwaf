import { useRouter } from 'next/router';

export default function D1() {
    const router = useRouter();

    return (
        <div className="p-4 w-screen h-screen flex flex-col items-center">
            <h1 className="text-xl">Current path</h1>
            <p className="text-lg">{router.pathname}</p>
        </div>
    );
}
