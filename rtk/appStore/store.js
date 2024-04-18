import addCustomerDataReducer from "../features/addCustomerDataSlice"
import  addPersonalDataReducer  from "../features/addPersonalDataSlice";
import cardDataReducer from "../features/cartDataSlice"
import cartSlice from "../features/cartSlice";
import fetchDataSlice from "../features/fetchDataSlice"
import {persistReducer,PURGE,PAUSE,PERSIST,FLUSH,REGISTER,REHYDRATE} from "redux-persist"
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'


let persistConfig = {
    key:"root",
    version:1,
    storage
}


const reducer = combineReducers({
    cardData:cardDataReducer,
    cartSlice:cartSlice,
    fetchDataSlice:fetchDataSlice,
    addCustomerData:addCustomerDataReducer,
    addPersonalData:addPersonalDataReducer,
})

let persistedReducer = persistReducer(persistConfig,reducer)


export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck :{
            ignoreActions : [PURGE,PAUSE,PERSIST,FLUSH,REGISTER,REHYDRATE]
        },
    }),
});













// const store = configureStore({
//     reducer:{
//         cart:cartSlice,
//         fetchData:fetchDataSlice,
//     }
// })

