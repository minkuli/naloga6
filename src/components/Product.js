import React from 'react';
import dummy from './dummy_product.jpeg';


const Product = (props) => {
    const { name, price } = props;
    return (
        <div className="w-20 mr2">
            <a href="/">
                <img className="ba" src={dummy} alt={name} />
            </a>
            <p>{name}</p>
            <p>{price}€</p>
        </div>
    );
}

export default Product;