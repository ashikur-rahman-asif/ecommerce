import { configureStore } from "@reduxjs/toolkit";
import adminProductSlice from "./admin/product-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductSlice,
  },
});

export default store;
