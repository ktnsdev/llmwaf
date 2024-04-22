export default function G1() {
    return (
      <div className="w-screen h-screen p-4 flex justify-center items-center">
        <input
          type="text"
          pattern="[0-9]*"
          className="text-center border-2 border-gray-300 rounded-md p-2"
          placeholder="Enter numbers only"
        />
      </div>
    );
  }