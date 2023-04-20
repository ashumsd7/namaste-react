import { useState, useContext } from "react";
// import { LOGO_URL } from "../utils/constant";
import LOGO from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart?.items);

  const { user } = useContext(UserContext);
  console.log("user is", user);
  return (
    <div className=" flex justify-between md:flex-row flex-col bg-pink-50 px-2">
      <div className="logo-container flex items-center">
        <img data-testid='logo' className="logo h-14 p-2" src={LOGO}></img>
      </div>
      <div className="nav-items flex  items-center">
        <ul className="flex py-2 px-2">
          <Link to="/">
            {" "}
            <li className="px-2 font-bold">Home</li>{" "}
          </Link>
          <Link to="/about">
            {" "}
            <li className="px-2 font-bold">About us</li>
          </Link>
          <Link to="/contact">
            <li className="px-2 font-bold">Contact us</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2 font-bold">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2 font-bold" data-testid='cart'>Cart({cartItems?.length})</li>{" "}
          </Link>
          <li className="px-2 font-bold" data-testid='online-status'>
            {isOnline ? "🟢 ONLINE" : "🔴 OFFLINE"}
          </li>
        </ul>
        {!isLoggedIn ? (
          <button
            className="font-bold bg-green-300 text-white h-8 rounded-md px-2 py-1"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="font-bold bg-red-300 text-black rounded-md px-2 py-1"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout {user.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
