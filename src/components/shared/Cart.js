import React, { useContext } from 'react';
//Context
import { CartContext } from '../../context/CartContextProvider';
//Functions
import { shorten } from '../../helper/functions';


const Cart = (props) => {
    const { dispatch } = useContext(CartContext);
    const {image, title, quantity, price} = props.data;

    return (
        <div>
            <img src={ image } alt="product" />
            <div>
                <h3>{ shorten(title) }</h3>
                <p>{ price }</p>
                <div>
                    <span>{ quantity }</span>
                </div>
            </div>
        </div>
    );
};

export default Cart;