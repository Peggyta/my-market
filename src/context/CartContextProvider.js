import React, {useReducer} from 'react';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD_ITEM":
            
    }
}

const CartContextProvider = () => {
    const[state, dispatch] = useReducer(cartReducer, initialState)
    return (
        <div>
            
        </div>
    );
};

export default CartContextProvider;