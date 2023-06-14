import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
  reducer: {
    search:searchSlice,
    app: appSlice,
    chat:ChatSlice
  },
});

export default store;
