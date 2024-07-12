import { createSlice } from '@reduxjs/toolkit'

// export interface CounterState {
//     value: number
//   }
  
  const initialState = {
    cart:[],
    totalQuantity:0,
    totalPrice:0
  }

  export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) =>{
          const find = state.cart.findIndex((item) => item._id === action.payload._id);
          if (find >= 0) {
            state.cart[find].number += 1;
          } else {
            state.cart.push(action.payload);
          }
        },
        getCartTotal: (state) => {
          const { totalQuantity, totalPrice } = state.cart.reduce(
            (cartTotal, cartItem) => {
              console.log("carttotal", cartTotal);
              console.log("cartitem", cartItem);
              const { price, number } = cartItem;
              console.log(price, number);
              const itemTotal = price * number;
              cartTotal.totalPrice += itemTotal;
              cartTotal.totalQuantity += number;
              return cartTotal;
            },
            {
              totalPrice: 0,
              totalQuantity: 0,
            }
          );
          state.totalPrice = parseInt(totalPrice.toFixed(2));
          state.totalQuantity = totalQuantity;
        },
        removeItem: (state, action) => {
          state.cart = state.cart.filter((item) => item._id !== action.payload);
        },
        increaseItemQuantity: (state, action) => {
          state.cart = state.cart.map((item) => {
            if (item._id === action.payload) {
              return { ...item, number: item.number + 1 };
            }
            return item;
          });
        },
        decreaseItemQuantity: (state, action) => {
          state.cart = state.cart.map((item) => {
            if (item._id === action.payload) {
              return { ...item, number: item.number - 1 };
            }
            return item;
          });
        },
    }
  })

  


  export const {addToCart,getCartTotal,removeItem,increaseItemQuantity,decreaseItemQuantity} = cartSlice.actions

  export default cartSlice.reducer;