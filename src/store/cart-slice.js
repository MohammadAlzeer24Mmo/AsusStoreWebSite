import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState: { id:1,cartIsEmpty:true, showCart:true,cart:[],totalPrice:0},
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
        addToCart(state,action){
            const existing = state.cart.find(product => product.id == action.payload.id)

            if(existing){

            existing.amount = action.payload.amount
              

                // totalAmount=existing.amount + action.payload.amount  
                let productPrice = existing.productPrice *  existing.amount
                // state.totalPrice = productPrice

                // state.totalPrice = state.totalPrice + existing.productPrice * existing.amount 
             
            }
                else{
                    
                    state.cart.push(action.payload);
                    state.totalPrice = +state.totalPrice + action.payload.productPrice * action.payload.amount;
            
                }
            
        },
        cartIsEmpty(state){
            state.cartIsEmpty = false;
        },
            changeAmountHandler(state,action){
                
                const existing = state.cart.find(product => product.id == action.payload.id)
                if (existing) {
                    
                    if(action.payload.operator == "+"){
                    existing.amount++
                    }
                    else if(action.payload.operator == "-"){

                        if(existing.amount == 1){
                            state.cart = state.cart.filter(cartItem => cartItem.id !== existing.id)
                        }else{existing.amount--}
                            
                    }
                }
            },
            removeItemHandler(state,action){
                const existing = state.cart.find(product => product.id == action.payload)
                state.cart = state.cart.filter(cartItem => cartItem.id !== existing.id)

            }
            
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;