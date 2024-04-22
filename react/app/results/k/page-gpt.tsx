export default function K() {
    return (
        <div className="p-4 w-screen h-screen flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl">Travel destinations</h1>
          <Card
            title="Destination 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
        </div>
      );
}

const Card = ({ title, description }) => {
    return (
      <div className="max-w-md mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg my-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-gray-700 text-base">{description}</div>
        </div>
      </div>
    );
  };
  