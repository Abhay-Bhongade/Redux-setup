import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {config3 } from "../../../src/ApiConfig/ApiConfig";
import  axios  from "axios";
import {toast} from "react-toastify"


const initialState = {
    loading:true,
    error:"",
    data:{}
}

const API = "http://16.171.47.172:5000/api/admin/"

export const LoginData = createAsyncThunk("loginData/login",async(formData)=>{
try{
    console.log("formData",formData);
const response = await axios.post(API + "login",formData,config3);
console.log("response",response);
return response.data
}catch(error){
toast.error(error?.response?.data?.message)
}

})


const LoginSlice = createSlice({
    name:"login",
    initialState,
    extraReducers:(builder)=>{
    builder.addCase(LoginData.pending,(state,action)=>{
        state.loading = true;
    }),
    builder.addCase(LoginData.fulfilled,(state,action)=>{
        state.loading = false;
        state.data = action.payload;
        state.error = "";
    }),
    builder.addCase(LoginData.rejected,(state,action)=>{
        state.loading = false
        state.data = [];
        state.error = action.error.message
    });
    },
});

export default LoginSlice.reducer;