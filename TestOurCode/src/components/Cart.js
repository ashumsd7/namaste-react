import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
function Cart() {
  const dispatch = useDispatch(store);
  const data = useSelector((store) => store.cart.items);

  console.log("data", data);

  return (
    <div className="px-6">
      {data?.length > 0 && (
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold my-6">CART ITEMS</h2>
          <button
            onClick={() => {
              dispatch(clearCart());
            }}
            className="px-2 py-1 rounded-md bg-red-500 text-white"
          >
            Clear Cart
          </button>
        </div>
      )}

      <div className="flex gap-6 flex-wrap">
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              className="px-10 py-2 gap-4 bg-pink-50 border rounded-md min-w-fit  flex flex-col items-center justify-center"
            >
              <h1 className="font-semibold text-2xl">{item.name}</h1>
            </div>
          );
        })}
      </div>

      {data?.length == 0 && <h1 className="text-4xl"> No items in Cart</h1>}
    </div>
  );
}

export default Cart;
