import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addwishlistItem:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlistItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addwishlistItem,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer