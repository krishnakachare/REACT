import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // Name of the slice
  // Initially what will that cart slice be
  initialState: {
    items: [],
  },
  reducers: {
    //? Below are action (addItem) and reducer function (that will modify the slice of the store)

    // reducer function get access to initial state of the slice of store and action, now on the basis of the action it is going to modify the state of the slice of the store
    addItem: (state, action) => {
      //! Mutating the state here (This was not possible in Vanilla Redux (Older Redux))
      state.items.push(action.payload);
    },
    // Removing the item from the cart slice
    removeItem: (state, action) => {
      state.items.pop();
    },
    // Reset the state of the cart slice, no need of action here
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

// console.log("Slice", cartSlice);

//? We need to export 2 things from here, action and reducer:

export const { addItem, removeItem, clearCart } = cartSlice.actions;

//? reducer without a "s" because we are exporting one big reducer which has multiple reducers.
export default cartSlice.reducer;


//? Redux toolkit uses Immer behind the scene