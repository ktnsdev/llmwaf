export default function G1() {
    return (
      <div id="container" className="w-screen h-screen flex justify-center items-center p-4">
        <form>
          <label htmlFor="numberInput">Enter a number:</label>
          <input
            type="number"
            id="numberInput"
            name="numberInput"
            className="border rounded px-2 py-1"
          />
        </form>
      </div>
    );
  }
  