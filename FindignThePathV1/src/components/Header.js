import { useState } from "react";
// import { LOGO_URL } from "../utils/constant";
import LOGO from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
        <Link to='/'>  <li>Home</li> </Link>
          <Link to="/about">
            {" "}
            <li>About us</li>
          </Link>
          <Link to="/contact">
          <li>Contact us</li></Link>
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
