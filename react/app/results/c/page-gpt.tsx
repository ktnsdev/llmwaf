import Link from 'next/link';

export default function C1() {
    return (
        <div className="p-4">
            <Link href="/privacy">
                <a>Privacy notice</a>
            </Link>
        </div>
    );
}
