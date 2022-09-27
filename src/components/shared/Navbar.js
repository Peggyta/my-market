import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Context
import { CartContext } from '../../context/CartContextProvider';
//Icons
import shopIcon from '../../assets/icons/shop.svg';

const Navbar = () => {
    const { state } = useContext(CartContext);
    return (
        <div>
            <Link to="/products">Products</Link>
        </div>
    );
};

export default Navbar;