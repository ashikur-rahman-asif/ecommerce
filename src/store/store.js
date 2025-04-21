import { configureStore } from "@reduxjs/toolkit";
import adminProductSlice from "./admin/product-slice";
import authReducer from "./auth-slice";
import shopProductSlice from "./shop/products-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductSlice,
    shopProducts:shopProductSlice
  },
});

export default store;
