import React from "react";

function Button({ name }) {
  return (
    <div className="px-5 py-1 rounded-lg m-2 text-center cursor-pointer bg-gray-300">
      {name}
    </div>
  );
}

export default Button;
