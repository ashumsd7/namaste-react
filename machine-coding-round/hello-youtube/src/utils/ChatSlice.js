import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMsg: (state, action) => {
      state.messages.splice(15, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addMsg } = chatSlice.actions;
