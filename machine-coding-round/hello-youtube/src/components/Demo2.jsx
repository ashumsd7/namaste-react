import React, { useEffect, useRef, useState } from "react";

function Demo2() {
  const [isDark, setIsDark] = useState(false);
  const [y, setY] = useState(0);

  let x = 0;

  let z = useRef(10000);

  console.log("Ref z", z);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("NAMASTE", Math.floor(Math.random() * 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`m-4 p-2 border rounded-md shadow-lg h-[400px] w-[400px] ${
        isDark ? "bg-gray-900 text-white" : ""
      }`}
    >
      <div className="flex justify-between">
        <h3 className="underline font-mono gap-2 font-extrabold">#useRef</h3>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
          className={`border p-1 hover:rotate-90 ease-out  rounded-full flex justify-center items-center shadow-xl  ${
            isDark
              ? "border-gray-200 bg-white text-black"
              : "border-black bg-black text-white"
          }`}
        >
          {isDark ? "🌞" : "🌙"}
        </button>
      </div>

      <div className="flex h-full w-full flex-col gap-2 items-center justify-center">
        <h1 className="text-xl">X: {x}</h1>
        <h1 className="text-xl">Y: {y}</h1>
        <h1 className="text-xl">Z: {z.current}</h1>

        <button
          className="px-2 py-1 border rounded-lg bg-gray-300 text-black font-mono font-bold"
          onClick={() => {
            x = x + 1;
            z.current = Number(z.current) + 1;
            console.log("x: ", x);
            console.log("z: ", z.current);
          }}
        >
          Increment X & Z
        </button>
        <button
          className="px-2 py-1 border rounded-lg bg-gray-300 text-black font-mono font-bold"
          onClick={() => {
            setY(y + 1);
            console.log("y: ", y);
          }}
        >
          Increment Y
        </button>
      </div>
    </div>
  );
}

export default Demo2;
