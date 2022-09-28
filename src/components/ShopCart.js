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
                {state.selectedItems.map(item => <Cart key = {item.id} data = {item} />)}
            </div>
            
        </div>
    );
};

export default ShopCart;