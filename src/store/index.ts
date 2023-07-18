import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tmdbApi } from "~/store/api";

import searchReducer from "~/store/slices/searchSlice";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
