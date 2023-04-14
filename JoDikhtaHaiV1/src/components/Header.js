import { useState } from "react";
// import { LOGO_URL } from "../utils/constant";
import LOGO from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline= useOnline()
  return (
    <div className=" flex justify-between bg-pink-50">
      <div className="logo-container">
        <img className="logo h-28 p-2" src={LOGO}></img>
      </div>
      <div className="nav-items flex  items-center">
        <ul className="flex py-10 px-2">
        <Link to='/' >  <li className="px-2 font-bold">Home</li> </Link>
          <Link to="/about">
            {" "}
            <li className="px-2 font-bold">About us</li>
          </Link>
          <Link to="/contact">
          <li className="px-2 font-bold">Contact us</li></Link>
          <Link to="/instamart">
          <li className="px-2 font-bold">Instamart</li></Link>
          <li className="px-2 font-bold">Cart</li>
          <li className="px-2 font-bold">{isOnline ?'💚' :'🍎'}</li>
        </ul>
        {!isLoggedIn ? (
        <button
        className="font-bold bg-green-300 text-white h-12 rounded-md px-2 py-1"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      ) : (
        <button
        className="font-bold bg-red-300 text-black rounded-sm px-2 py-1"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      )}
      </div>
     
    </div>
  );
};

export default Header;
