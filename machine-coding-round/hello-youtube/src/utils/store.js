import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    search:searchSlice,
    app: appSlice,
  },
});

export default store;
