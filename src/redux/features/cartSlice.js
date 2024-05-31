import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to cart reducer

    addToCart: (state, action) => {
      const existingItem = state.carts.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qnty++; // Increment the quantity if the item already exists
      } else {
        state.carts = [...state.carts, action.payload];
      }
    },

    removeAll: (state, action) => {
      state.carts = [];
    },
    removeOne: (state, action) => {
      const existingItem = state.carts.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      const index = state.carts.indexOf(existingItem)

      state.carts.splice(index, 1);
    },
    qtyDecrement:(state,action)=>{
      const existingItem = state.carts.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if(existingItem.qnty > 1){
        existingItem.qnty--;
      }else if(existingItem.qnty === 1){
        const index = state.carts.indexOf(existingItem)
        state.carts.splice(index,1)
      }
    }
  },
});

export const { addToCart, removeAll, removeOne ,qtyDecrement} = cartSlice.actions;

export default cartSlice.reducer;
