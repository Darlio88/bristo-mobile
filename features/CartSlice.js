
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartList:[],
    itemCount: {},
}

export const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem: (state, action)=>{
         state.cartList = [...state.cartList, action.payload]
         if(state.itemCount[action.payload.name]){
           state.itemCount[action.payload.name]++
         } else{
            state.itemCount[action.payload.name] = 1
         }
        },
        reduceItem: (state, action)=>{
            state.cartList = [...state.cartList, action.payload]
            if(state.itemCount[action.payload.name]>1){
              state.itemCount[action.payload.name]--
            } else{
                state.cartList = state.cartList.filter(item=>item.name !== action.payload.name)
                state.itemCount[action.payload.name]=0
            }
        },
        removeItem:(state, action) =>{
            // state.itemCount.delete(action.payload.name)
            state.itemCount[action.payload.name]=0
            state.cartList = state.cartList.filter(item=>item.name !== action.payload.name)
        }
     
    }
})

export const {addItem, removeItem, reduceItem} = CartSlice.actions

export default CartSlice.reducer


