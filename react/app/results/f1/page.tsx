export default function F1() {
    function showAlert() {
      alert("You've got an email");
    }
  
    return (
      <div
        id="container"
        className="w-screen h-screen p-4 flex flex-col items-center justify-center"
      >
        <button
          onClick={showAlert}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Show Alert
        </button>
      </div>
    );
  }