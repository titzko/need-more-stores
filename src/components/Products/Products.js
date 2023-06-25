import { useState } from 'react';
import './Products.scss';

import ProductCard from './Product/ProductCard';
import Pagination from './Pagination/Pagination';
import Spinner from '../Spinner';

export default function Products({ products, total, totalPages, currentPage, handleNewPage }) {


    const [loadedImages, setLoadedImages] = useState(0);

    const handleImageLoading = () => {
        setLoadedImages(prev => prev + 1)
    }


    function onPageChange(page) {
        setLoadedImages(0);
        handleNewPage(page);
    }


    return (

        <div className="products p-3">

            {loadedImages < products.length && <Spinner />}

            <div className='products-wrapper'>
                {products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product} onImageLoad={handleImageLoading} />
                    )
                })}

            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
        </div>
    )
}