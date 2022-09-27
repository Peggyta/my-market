import React, {useContext} from 'react';
//Components
import Product from './shared/Product';
import Loader from './Loader';
//Context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {
    const products = useContext(ProductsContext);
    return (
        <>
            {products.length ?
            <div>
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