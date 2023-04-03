//create nested elements
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    name: "main-heading",
  },
  "I am laying the foundation"
);



const jsxHeading= <h1> I AM JSX Heading</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading)