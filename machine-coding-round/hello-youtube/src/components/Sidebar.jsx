import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return;
  return (
    <div className="py-2  px-4 shadow-lg w-56  my-6">
      <ul className=" pt-4 flex flex-col gap-2">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <hr className="my-6" />
      <h1 className="font-bold ">Subscriptions</h1>
      <ul className="flex flex-col gap-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <hr className="my-6" />

      <h1 className="font-bold ">Watch Later</h1>
      <ul className="flex flex-col gap-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
