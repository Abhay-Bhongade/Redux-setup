import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { axios } from "axios";
import { API_URLS,config,userRole,API } from "../../src/ApiConfig/ApiConfig";

const initialState = {
    data:{},
    loading:false,
    error:""
}


export const getRecruiterData = createAsyncThunk(
    "getRecruiterData/recruiter", async()=>{
        try{
            const SelectAPI_Url = API_URLS[userRole.toLocaleLowerCase] || API
            const response = await axios.get(SelectAPI_Url + "recruiter-list");
            const relavantData = response.data
            return relavantData;
        }catch(error){
            console.log(error);
        }
       
    }
)

const getRecruiterDataSlice = createSlice({
    name:"getRecruiterData",
    initialState,
    extraReducers:(builder)=>{
builder.addCase(getRecruiterData.pending,(state,action)=>{
        state.loading = true;
});
builder.addCase(getRecruiterData.fulfilled,(state,action)=>{
        state.loading = false;
        state.data = action.payload;
        state.error = "";
})
builder.addCase(getRecruiterData.rejected,(state,action)=>{
    state.loading = false;
    state.data = {},
    state.error = action.error.message
});
 },
});


export default getRecruiterDataSlice