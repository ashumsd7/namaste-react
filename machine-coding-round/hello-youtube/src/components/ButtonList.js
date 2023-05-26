import React from "react";
import Button from "./Button";

function ButtonList() {
  const list = [
    "All",
    "Live",
    "Kapil Sharma",
    "Coking",
    "Worldcup",
    "IPL-2023",
  ];
  return (
    <div className="flex">
      {list.map((data) => (
        <Button name={data} />
      ))}
    </div>
  );
}

export default ButtonList;
