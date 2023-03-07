import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import singleUserSlice from "../Slices/singleUserSlice";
import userSlice from "../Slices/userSlice";
import productSlice from "../features/displaySlice/productSlice";
import singleProductSlice from "../features/displaySlice/singleProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    singleUser: singleUserSlice,
    users: userSlice,
    products: productSlice,
    singleProduct: singleProductSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
