import { asyncThunkCreator, configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/index.Reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(asyncThunkCreator),
  ],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
