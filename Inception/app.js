const heading = React.createElement(
  "h1",
  {
    name: "custom_heading",
    id: "headingId",
    style: {
      color: "red",
    },
  },
  "Hey I am paragraph rendered by react"
);
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
