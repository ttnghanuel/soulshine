import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./slice/loadingSlice";
import cartReducer from "./slice/cartSlice";
import productListReducer from "./slice/productListSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    cart: cartReducer,
    productList: productListReducer,
    user: userReducer,
  },
});
