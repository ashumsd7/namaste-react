//create nested elements
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://i.ibb.co/4VfV1tf/logo.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src="https://t4.ftcdn.net/jpg/02/43/47/01/360_F_243470143_Tb3lMpux13JqExBj38gTDhsHUcDJfEZz.jpg"></img>
      <h3>JalJala foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* res-card */}

        <ResCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
