import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthenticated:false,
    isLoading: false,
    user:null,
    isError: false,
    error: null,
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{

        }
    }
})

export const {}=authSlice.actions
export default authSlice.reducer