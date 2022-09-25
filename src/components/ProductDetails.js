import React, {useParams} from 'react';

const ProductDetails = () => {
    const params = useParams();
    const id = params.id;
    const data = data[id-1];
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;