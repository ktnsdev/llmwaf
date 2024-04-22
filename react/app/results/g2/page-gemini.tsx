export default function G1() {
  return (
    <div id="container" className="w-screen h-screen flex justify-center items-center p-4">
      <form className="flex">  {/* Add flex class to the form */}
        <label htmlFor="numberInput">Enter a number:</label>
        <input
          type="number"
          id="numberInput"
          name="numberInput"
          className="border rounded px-2 py-1 mr-2"  {/* Add margin-right for spacing */}
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">Submit</button>
      </form>
    </div>
  );
}