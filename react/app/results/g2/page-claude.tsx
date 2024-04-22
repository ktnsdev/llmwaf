export default function G1() {
  return (
    <div className="w-screen h-screen p-4 flex justify-center items-center">
      <div className="flex items-center">
        <input
          type="text"
          pattern="\[0-9\]\*"
          className="text-center border-2 border-gray-300 rounded-md p-2"
          placeholder="Enter numbers only"
        />
        <button
          type="button"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
}