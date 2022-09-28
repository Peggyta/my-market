import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';

const ShopCart = () => {
    const{ state, dispatch } = useContext(CartContext);
    return (
        <div>
            <div>
                { state.selectedItems.map(item => <Cart key = {item.id} data = {item} />) }
            </div>
                {
                    state.itemsCounter > 0 && 
                    <div> 
                        <p><span>Total Items:</span>{state.itemsCounter}</p>
                        <p><span>Total Payments:</span>{state.total}</p>
                    <div>
                        <button onClick = {() => dispatch({type:"CHECKOUT"})}>Checkout</button>
                        <button onClick = {() => dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                    </div>
                }
        </div>
    );
};

export default ShopCart;