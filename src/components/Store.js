import React, {useContext} from 'react';
//Components
import Product from './shared/Product';
import Loader from './Loader';
//Context
import { ProductsContext } from '../context/ProductContextProvider';
//Style
import styles from '../components/Store.module.css';

const Store = () => {
    const products = useContext(ProductsContext);
    return (
        <>
            {products.length ?
                <div className={styles.container}>
                {
                    products.map(product => <Product key={product.id} productData={product}/>)
                }
                </div> :
                    <Loader />
            }
        </>
    );
};

export default Store;