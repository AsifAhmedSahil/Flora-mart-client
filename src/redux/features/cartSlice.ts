import { createSlice } from '@reduxjs/toolkit'


// export interface CounterState {
//     value: number
//   }
interface CartItem {
  _id: string;
  number: number;
  price:number
  
}


  
const initialState = {
  cart: [] as { _id: string; /* add other properties here */ }[],
  totalQuantity: 0,
  totalPrice: 0,
  searchText: ""
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
          // Assert `existingItem` to have both _id and number properties
          const updatedItem = existingItem as CartItem; // Type assertion
          updatedItem.number += 1; // Now you can safely access number
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
              // Assert `cartItem` to have both price and number properties
              const updatedItem = cartItem as CartItem; // Type assertion
              const itemTotal = updatedItem.price * updatedItem.number;
              cartTotal.totalPrice += itemTotal;
              cartTotal.totalQuantity += updatedItem.number;
              return cartTotal;
            },
            { totalPrice: 0, totalQuantity: 0 }
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
              // Assert `item` to have both _id and number properties
              const updatedItem = item as CartItem; // Type assertion
              return { ...updatedItem, number: updatedItem.number + 1 };
            }
            return item;
          });
        },
        decreaseItemQuantity: (state, action) => {
          state.cart = state.cart.map((item) => {
            if (item._id === action.payload) {
              const updatedItem = item as CartItem; // Type assertion
              return { ...updatedItem, number: Math.max(updatedItem.number - 1, 0) }; // Ensure quantity doesn't go negative
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