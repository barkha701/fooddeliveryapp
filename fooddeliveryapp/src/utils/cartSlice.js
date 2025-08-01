import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({ 
    name : 'cart',
    initialState: {
        items : []
    },
    //we have multiple reducers
    reducers : {
        // all the functions to add, delete, etc item are written under reducers (functions)
        // mutating the state 
        addItem: (state, action) => {
//addItem is the reducer function which is mapped to cartSlice which can actually modify things 
// state gets modified by action => this state is the initial state 

// redux toolkit uses immer BTS to mutate obj
state.items.push(action.payload);
        },
        removeItem: (state, action) => {
state.items.pop();
        },
clearCart: (state) => {
    state.items.length = 0;
                    },
                        },
                            });

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer; // this 1 reducer is a combination of all reducers