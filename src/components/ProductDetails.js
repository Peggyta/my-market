import React, {useParams} from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    const id = params.id;
    const data = data[id-1];
    const {image, title, description, price, category} = product;
    return (
        <div>
            <img src={image} alt="product"/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span>{category}</p>
                <div>
                    <span>{price}</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;