//create nested elements

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
