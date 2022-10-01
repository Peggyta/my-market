import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../context/CartContextProvider';
//Components
import Cart from './shared/Cart';
//Style
import styles from '../components/ShopCart.module.css';

const ShopCart = () => {
    const{ state, dispatch } = useContext(CartContext);
    return (
        <div className={styles.container}>
           <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key = {item.id} data = {item} />)}
           </div>
           {
                state.itemsCounter > 0 && 
                <div>
                    <p><span>Total Items:</span>{state.itemsCounter}</p>
                    <p><span>Total Payments:</span>{state.total} $</p>
                    <div>
                        <button onClick ={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button onClick ={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                    </div>
                </div>
           }

           {
                state.checkout && 
                    <div>
                        <h3>Checked out successfully!</h3>
                        <Link to = "/products">Buy more</Link>
                    </div>
           }

           {
                !state.checkout && state.itemsCounter === 0 && 
                    <div>
                        <h3>Want to buy?</h3>
                        <Link to = "/products">Go to shop</Link>
                    </div>
           }
        </div>
    );
};

export default ShopCart;