import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import store from "../utils/store";

const ResMenu = () => {
  const params = useParams();
  const resData = useRestaurant(params.id);
  const online = useOnline();
  const dispatch= useDispatch(store)

  console.log("resData", resData);

  if (!online) {
    return <h1>🟥You are offline please check your internet</h1>;
  }

  const handleAddItem = () => {
    //dispatch an action to the store that will call a reducer function
    // which will update the store
    dispatch(addItem('Grapes'))
  };

  return (
    <div>
      <h1> Res ID : {params.id}</h1>
      <h2>My Res ; {resData?.followers}</h2>
      <button
        onClick={() => {
          handleAddItem();
        }}
        className="px-2 py-1 rounded-md bg-green-500 text-white"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ResMenu;
