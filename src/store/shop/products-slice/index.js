import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async ({ filterParams, sortParams }) => {
    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
    });

    const result = await axios.get(
      `http://localhost:3000/api/shop/products/get?${query}`
    );

    return result?.data;
  }
);

// fetch single product
export const fetchSingleProduct = createAsyncThunk(
  "/products/fetchSingleProduct",
  async (id) => {
    const result = await axios.get(
      `http://localhost:3000/api/shop/products/get/${id}`
    );

    return result?.data;
  }
);

const ShopProductsSlice = createSlice({
  name: "shopProductSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.productDetails = action.payload?.data || [];
      })

      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.productList = action.payload?.data || [];
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
        console.error("Error fetching products:", action.payload);
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetails = [];
        console.error("Error fetching products:", action.payload);
      });
  },
});

export default ShopProductsSlice.reducer;
