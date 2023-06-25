import React, { useEffect } from 'react';
import './Product.scss';

export default function Product({product}) {

    

    return (
        <div className="product d-flex">
            <div>
                <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.product_name}</h3>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-brand">Brand: {product.brand}</p>
                <p className="product-price">${product.price}</p>
            </div>
        </div>
    )
}
