import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data : {},
    loading:false,
    error:""
}

const addCustomerDataSlice = createSlice({
    name:"addCustomerDataSlice",
    initialState,
    reducers:{
        addCustomerData : (state,action)=>{
            state.data = action.payload
        },
        resetCustomerData :(state,action)=>{
            state.data = {};
            state.loading = action.loading,
            state.error = action.error
        }
    }
})

export const {addCustomerData,resetCustomerData} = addCustomerDataSlice.actions;

export default addCustomerDataSlice.reducer;