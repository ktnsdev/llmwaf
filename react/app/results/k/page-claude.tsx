export default function K() {
    return (
      <div id="container" className="p-4 w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl mb-8">Travel destinations</h1>
        <Card
          title="Paris, France"
          description="Explore the iconic Eiffel Tower, the Louvre Museum, and the charming streets of Montmartre in the City of Light."
        />
      </div>
    );
  }
  
  const Card = ({ title, description }) => {
    return (
      <div className="bg-gray-200 rounded-lg shadow-md p-6 max-w-md">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <div className="border-b border-gray-400 mb-2"></div>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };