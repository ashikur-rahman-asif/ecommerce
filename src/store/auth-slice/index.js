import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  isError: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set user details and authentication status
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = !!action.payload.user; // True if user exists
      state.isLoading = false;
      state.isError = false;
      state.error = null;
    },
    // Action to handle logout
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    // Action to handle errors
    setError: (state, action) => {
      state.isError = true;
      state.error = action.payload;
      state.isLoading = false;
    },
    // Action to set loading state
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, logout, setError, setLoading } = authSlice.actions;
export default authSlice.reducer;
