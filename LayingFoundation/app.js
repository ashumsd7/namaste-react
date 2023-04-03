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

// this s for that
const jsxHeading = (
  <h1 className="your-class" tabIndex="2">
    {" "}
    I AM JSX Heading
  </h1>
);

//react functional component
const HeadingComponent = () => {
  return (
    <div className="container">
      <h1>I am functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
