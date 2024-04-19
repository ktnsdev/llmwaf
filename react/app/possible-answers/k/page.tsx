export default function K() {
    return (
        <div id="container" className="p-4 w-screen h-screen flex flex-col">
            <h1 className="font-bold text-xl">Travel destinations</h1>
            <Card title="London" description="United Kingdom" />
        </div>
    );
}

interface CardProps {
    title?: string;
    description?: string;
}

function Card(props: CardProps) {
    return (
        <div className="rounded-lg shadow-md bg-gray-200 p-4 mb-4">
            <h2 className="font-bold text-lg">{props.title}</h2>
            <div className="w-full bg-gray-600 h-[1px] my-3" />
            <p className="text-sm">{props.description}</p>
        </div>
    );
}

// TODO: Card component
