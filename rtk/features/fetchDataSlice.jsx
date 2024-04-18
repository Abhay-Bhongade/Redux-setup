import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//Define the initial state

const initialState ={
    data:{},
    loading:false,
    error:""
}

export const fetchData = createAsyncThunk("api/fetchData",async()=>{
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return response.data;
    } catch (error) {
        console.error("An error occurred3:", error?.response?.data?.message);
    }
})

const fetchDataSlice = createSlice({
    name:"fetchData",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = ""
        });
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.loading = false;
            state.data = [];
            state.error = action.error.message
        });
    },

});

export default fetchDataSlice.reducer;