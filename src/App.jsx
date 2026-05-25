import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [table, setTable] = useState("");

  const generate = () => {
    if (input) setTable(input);
  };
  const reset =(e)=>{
    setInput(generate)
    setInput(e.target.value)
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-start sm:items-center bg-black text-white p-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg border border-green-500 flex flex-col gap-4 p-4 sm:p-6 rounded-lg">

        <h2 className="text-lg sm:text-xl font-medium text-center">Pahada Generator</h2>

        <div className="flex sm:flex-row flex-col gap-2">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && generate()}
            placeholder="Number daalo..."
            className="bg-gray-700 flex-1 p-2 sm:p-3 rounded outline-none text-sm sm:text-base [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <button
            onClick={generate}
            className="border border-green-500 py-2 px-3 sm:px-4 rounded-md cursor-pointer active:scale-95 text-green-400 text-sm sm:text-base whitespace-nowrap"
          >
            Submit
          </button>
          <button 
          onClick={reset}
          className="border border-green-500 py-2 px-3 sm:px-4 rounded-md cursor-pointer active:scale-95 text-green-400 text-sm sm:text-base whitespace-nowrap">Reset</button>
        </div>

        {table && (
          <div className="flex flex-col gap-1 mt-2">
            <h3 className="text-center text-green-400 text-sm sm:text-base mb-2">
              {table} ka pahada
            </h3>
            {[1,2,3,4,5,6,7,8,9,10].map((idx) => (
              <div
                key={idx}
                className="flex justify-between bg-gray-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded text-sm sm:text-base"
              >
                <span className="text-gray-400">{table} × {idx}</span>
                <strong className="font-medium">= {table * idx}</strong>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default App;