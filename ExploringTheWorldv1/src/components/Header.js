import { useState } from "react";
import { LOGO_URL } from "../utils/constant";



const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
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
      {!isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
