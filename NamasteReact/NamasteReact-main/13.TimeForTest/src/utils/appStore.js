import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore = configureStore({
    // This is the big reducer of the store
    reducer: {
        // These are small reducers of each slices
        cart: cartReducer
    }
})

export default appStore;