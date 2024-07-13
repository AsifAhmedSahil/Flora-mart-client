import { createSlice } from '@reduxjs/toolkit'

// export interface CounterState {
//     value: number
//   }
  
  const initialState = {
    cart:[],
    totalQuantity:0,
    totalPrice:0,
    searchText : ""
  }

  export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        
      clearCart:(state) =>{
        state.cart = [];
      },

        addToCart: (state, action) => {
          const { _id } = action.payload;
          const existingItem = state.cart.find(item => item._id === _id);
    
          if (existingItem) {
            // If item already exists in cart, increment quantity
            existingItem.number += 1;
          } else {
            // If item does not exist in cart, add it
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
        addSearchText:(state,action) =>{
          state.searchText = action.payload
        }
    }
  })

  


  export const {addToCart,clearCart,addSearchText,getCartTotal,removeItem,increaseItemQuantity,decreaseItemQuantity} = cartSlice.actions

  export default cartSlice.reducer;