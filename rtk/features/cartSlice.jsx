import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:["buger","pizza"]
    },
    reducers:{
        addItem:(state,action)=>{
            //in vanila(redux)  older redux => "DON'T MUTATE THE STATE DIRECTLY" //returning was mandatory
            // const newState = [...state];
            // newState.item.push(action.payload)
            // return newState

            //mutating the state directly
            state.item.push(action.payload)
            //Redux Toolkit
            //we have to mutate the state //returning is not mandatory
        },
        removeItem:(state,action)=>{
            state.item.pop()
        },
        clearCart:(state)=>{
            state.item.length = 0;
            //RTK either you can mutate the original state or return a new state
            //return {items:[]} //this new object will be replace with original  state {items:[]}

        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer;
