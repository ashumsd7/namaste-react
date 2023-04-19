import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        console.log('state', state)
        console.log('action', action)
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
