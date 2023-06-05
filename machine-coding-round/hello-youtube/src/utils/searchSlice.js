import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      console.log("sssssssssss", action);
      state.search = { ...state.search,...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
