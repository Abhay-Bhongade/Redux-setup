import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: {},
    loading:false,
    error:"",
}

const addPersonalDataSlice = createSlice({
    name:"addPersonalDataSlice",
    initialState,
    reducers:{
        addPersonalData:(state,action)=>{
        state.data = action.payload
        },
        resetPersonalData:(state,action)=>{
            state.data = {}
            state.loading = initialState.loading,
            state.error = initialState.error
        }
    }
})


export const  {addPersonalData,resetPersonalData} = addPersonalDataSlice.actions;

export default addPersonalDataSlice.reducer;