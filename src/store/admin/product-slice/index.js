import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};

// add a new product
export const addNewProduct = createAsyncThunk(
  "/product/addnewproduct",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/products/add",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data; // Return response data to the reducer
    } catch (error) {
      // Handle errors and return the error message
      return rejectWithValue(error.response?.data || "Failed to add product");
    }
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/product/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/products/all-products"
      );
      return response.data; // Return response data to the reducer
    } catch (error) {
      // Handle errors and return the error message
      return rejectWithValue(
        error.response?.data || "Failed to fetch products"
      );
    }
  }
);

const AdminProductSlice = createSlice({
  name: "adminProductSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default AdminProductSlice;
