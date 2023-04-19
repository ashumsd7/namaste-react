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
  const dispatch = useDispatch(store);

  console.log("resData", resData);

  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Durian" },
    { id: 5, name: "Elderberry" },
    { id: 6, name: "Fig" },
    { id: 7, name: "Grape" },
    { id: 8, name: "Honeydew" },
    { id: 9, name: "Jackfruit" },
    { id: 10, name: "Kiwi" },
    { id: 11, name: "Lemon" },
    { id: 12, name: "Mango" },
    { id: 13, name: "Nectarine" },
    { id: 14, name: "Orange" },
    { id: 15, name: "Papaya" },
    { id: 16, name: "Quince" },
    { id: 17, name: "Raspberry" },
    { id: 18, name: "Strawberry" },
    { id: 19, name: "Tangerine" },
    { id: 20, name: "Watermelon" },
  ];

  if (!online) {
    return <h1>🟥You are offline please check your internet</h1>;
  }

  const handleAddItem = (item) => {
    //dispatch an action to the store that will call a reducer function
    // which will update the store
    dispatch(addItem(item));
  };

  return (
    <div>
      <div className="w-full bg-pink-300 mb-6">
        <h1> Res ID : {params.id}</h1>
        <h2>My Res ; {resData?.followers}</h2>
      </div>

      <h2>Menu Items</h2>
      <div className="flex gap-6 flex-wrap">
        {fruits.map((item) => {
          return (
            <div className="px-10 py-2 gap-4 bg-pink-50 border rounded-md min-w-fit  flex flex-col items-center justify-center">
              <h1 className="font-semibold text-2xl">{item.name}</h1>
              <button
                onClick={() => {
                  handleAddItem(item);
                }}
                className="px-2 py-1 rounded-md bg-green-500 text-white"
              >
                + Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
