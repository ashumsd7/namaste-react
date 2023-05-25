import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useSelector } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
 
  return (
    <div className="grid grid-flow-col w-[100vw] py-2 px-5 items-center  shadow-lg gap-10">
      <div className="flex col-span-1 items-center">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          onClick={() => {
            toggleMenuHandler();
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYJjs7Ar_hSNglS24KfUE5R5TwplifgObxuFWUbtmFQ&s"
        ></img>
        <img
          className="h-6 mx-2 hidden md:flex cursor-pointer"
          alt="logo"
          src="data:image/png;base64,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"
        />
      </div>

      <div className="col-span-10 m-auto w-full flex lg:mx-[30%]  border-gray-400">
        <input
          className="lg:w-[450px] md:w-[200px] rounded-l-full p-2 border border-gray-400"
          type="text"
        ></input>
        <button className="border border-gray-400  rounded-r-full px-4">
          🔍
        </button>
        <button className="border border-gray-400 rounded-full ml-4 px-3">
          🎙️
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
