
import { useState, useEffect } from 'react';
import './ProductCard.scss';

export default function ProductCard({ product, openPurchasingDialog }) {

    const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/150';
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    useEffect(() => {
        setImageLoaded(false);
    }, [product]);


    return (
        <div className="product d-flex" onClick={() => openPurchasingDialog(product)}>
            <div>
                <img
                    src={PLACEHOLDER_IMAGE}
                    style={{ display: imageLoaded ? "none" : "block" }}
                    alt={product.name}
                />
                <img
                    src={product.imageUrl}
                    style={{ display: imageLoaded ? "block" : "none" }}
                    onLoad={handleImageLoad}
                    onError={handleImageLoad}
                    alt={product.name}
                />
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
