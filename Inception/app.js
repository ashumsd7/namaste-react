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



// const heading = React.createElement(
//   "h1",
//   {
//     name: "custom_heading",
//     id: "headingId",
//     style: {
//       color: "red",
//     },
//   },
//   "Hey I am paragraph rendered by react"
// );
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
