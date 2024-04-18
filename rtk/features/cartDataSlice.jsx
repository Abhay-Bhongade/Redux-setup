import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    items:[]
}

const cardDataSlice = createSlice({
    name:"cartData",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            console.log("action.payload",action.payload);
            const {id,name,price,quantity} = action.payload;
            const existingItemIndex = state.items?.findIndex((item)=>item.id === id);

            if(existingItemIndex !== -1){
                state.items[existingItemIndex].quantity += quantity
            }else{
                state.items.push({id,name,price,quantity});
            }
        },
        removeFromCart:(state,action)=>{
            const {id,name,price,quantity} = action.payload
            state.items = state.items.filter((item)=>item.id !==id);
        },
        
    }
})

export const {addToCart,removeFromCart} = cardDataSlice.actions;

export default cardDataSlice.reducer