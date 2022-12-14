import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../featuers/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (defaultMiddleWare) => defaultMiddleWare().concat(apiSlice.middleware),
});
