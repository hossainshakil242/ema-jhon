import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {id, img, name, ratings, seller, price} = props.product;
    const handleAddtoCart = props.handleAddtoCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}start</p>
            </div>
            <button onClick={()=>handleAddtoCart(props.product)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;