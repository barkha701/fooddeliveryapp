import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //make slices here
    // this is 1 big reducer having multiple small reducers
    reducer : {
        cart: cartReducer
    }
});

export default appStore;



