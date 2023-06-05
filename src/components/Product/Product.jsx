import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {img, name, ratings, seller, price}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}start</p>
            </div>
        </div>
    );
};

export default Product;