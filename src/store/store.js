import { configureStore } from "@reduxjs/toolkit";
import adminProductSlice from "./admin/product-slice";
import authReducer from "./auth-slice";
import shopCartSlice from "./shop/cart-slice";
import shopProductSlice from "./shop/products-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductSlice,
    shopProducts:shopProductSlice,
    shopCart:shopCartSlice
  },
});

export default store;
