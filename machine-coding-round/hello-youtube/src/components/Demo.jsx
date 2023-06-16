import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

function Demo() {
  const [text, setText] = useState("");
  const [isDark, setIsDark] = useState(true);

//   const prime = findPrime(text);

  const prime = useMemo(() => {
    return findPrime(text);
  }, [text]);

  console.log("component re rendering");
  return (
    <div
      className={`m-4 p-2 border rounded-md shadow-lg h-[400px] w-[400px] ${
        isDark ? "bg-gray-900 text-white" : ""
      }`}
    >
      <div className="flex justify-between">
        <h3 className="underline font-mono gap-2 font-extrabold">#useMemo</h3>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
          className={`border p-1 rounded-full flex justify-center items-center shadow-xl  ${
            isDark
              ? "border-gray-200 bg-white text-black"
              : "border-black bg-black text-white"
          }`}
        >
          {isDark ? "🌞" : "🌙"}
        </button>
      </div>

      <div className=" flex flex-col justify-center gap-2 items-center w-full h-full ">
        <div>
          <input
            type={"number"}
            className="border px-2 py-1 text-green-500 rounded-lg border-black"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>

        <h2 className="font-mono gap-2 font-extrabold">nth Prime : {prime}</h2>
      </div>
    </div>
  );
}

export default Demo;
