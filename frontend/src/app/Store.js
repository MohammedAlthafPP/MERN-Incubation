import { configureStore } from "@reduxjs/toolkit";
import ApplicationSlice from "../Redux/ApplicationSlice";

export const Store = configureStore({
  reducer: {
    application: ApplicationSlice.reducer,
  },
});

export default Store;
