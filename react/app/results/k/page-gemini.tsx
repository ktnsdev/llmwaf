export default function K() {
    return (
      <div id="container" className="p-4 w-screen h-screen flex flex-col">
        <h1 className="font-bold text-xl mb-4">Travel destinations</h1>
        <Card title="Paris, the City of Lights" description="Explore the Eiffel Tower, Louvre Museum, and charming cafes." />
      </div>
    );
  }
  
  function Card({ title, description }) {
    return (
      <div className="shadow-md rounded-lg bg-gray-200 p-4 mx-auto">
        <h2 className="font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <hr className="my-2 border-gray-300" />
      </div>
    );
  }
  