import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

import profileReducer from "./slices/profileSlice";
import ordersReducer from "./slices/ordersSlice";
import singleOrderReducer from "./slices/singleOrderSlice";
import othersReducer from "./slices/othersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    orders: ordersReducer,
    singleOrder: singleOrderReducer,
    others: othersReducer,
  },
});
