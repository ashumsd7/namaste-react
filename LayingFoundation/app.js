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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)