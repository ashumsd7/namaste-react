import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
function Cart() {
  const data = useSelector((store) => store.cart.items);

  console.log("data", data);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">CART ITEMS</h2>

      <div className="flex gap-6 flex-wrap">
        {data?.map((item) => {
          return (
            <div key={item.id} className="px-10 py-2 gap-4 bg-pink-50 border rounded-md min-w-fit  flex flex-col items-center justify-center">
              <h1 className="font-semibold text-2xl">{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
