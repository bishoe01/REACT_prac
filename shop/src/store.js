import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";


let cart = createSlice({
    name  : 'cart',
    initialState: [
        {id: 0 , name : "White and Black", count : 2},
        {id: 2 , name : "Grey Yordan", count : 1},
    ],  
    reducers: {
        changeCount(state,action){
            let index= state.findIndex((a) => {return a.id === action.payload})
            state[index].count += 1;
        },
        addCart(state,action){
            state.push(action.payload);
        }
    }
})

export let {changeCount, addCart} = cart.actions;

let stock = createSlice({
    name : "stock",
    initialState: [10,11,12],

})


export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer,
    }
})