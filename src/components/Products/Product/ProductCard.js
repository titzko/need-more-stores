import './ProductCard.scss';

export default function ProductCard({product, onImageLoad}) {

    const placeholderImage = 'https://via.placeholder.com/150';


    return (
        <div className="product d-flex">
            <div>
                <img 
                src={product.imageUrl || placeholderImage}
                 onLoad={() => onImageLoad()}
                 onError={() => onImageLoad()}
                 alt="product" />
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
