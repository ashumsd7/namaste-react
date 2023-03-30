//create nested elements
import React from 'react'
import  ReactDOM  from 'react-dom/client';
const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement(
    "div",
    { id: "child" },
 [   React.createElement("h1", {}, "I am h1 : Sibling"),   React.createElement("h1", {}, "I am h1 : Sibling")]
  )
);

console.log("Parent is", parent)
console.log("Child is", document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
