"use client";

export default function F1() {
    function showAlert() {
        alert("You've got an email");
    }

    return (
        <div
            id="container"
            className="w-screen h-screen p-4 flex flex-col items-center justify-center"
        >
            <button className="bg-gray-200 rounded-lg py-3 px-4 mt-3" onClick={showAlert}>
                Show alert
            </button>
        </div>
    );
}
