const heading = React.createElement(
    "h1",
    {name:'custom_heading',id:'headingId'},
    "Hey I am paragraph rendered by react"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);