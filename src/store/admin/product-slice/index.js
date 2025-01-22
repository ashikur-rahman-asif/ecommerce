import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};

// Add a new product
export const addNewProduct = createAsyncThunk(
  "/product/addnewproduct",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/products/add",
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add product");
    }
  }
);

// Get all products
export const fetchAllProducts = createAsyncThunk(
  "/product/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/products/all-products"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch products"
      );
    }
  }
);

// Edit a product
export const editProduct = createAsyncThunk(
  "/product/editProduct",
  async ({ formData, id }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/admin/products/edit/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to edit product");
    }
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk(
  "/product/deleteProduct",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/admin/products/delete/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to delete product"
      );
    }
  }
);
const AdminProductSlice = createSlice({
  name: "adminProductSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        (state.isLoading = false), (state.productList = action.payload);
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        console.log(action.payload);
        (state.isLoading = false), (state.productList = []);
      });
  },
});

export default AdminProductSlice.reducer;
