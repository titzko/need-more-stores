import { useState, useEffect } from 'react';
import './Products.scss';

import ProductCard from './ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner';

export default function Products({ products, totalPages, currentPage, handleNewPage, addToBasketFn }) {


    const [pageLoaded, setPageLoaded] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setPageLoaded(true);
        }, 300)

    }, [pageLoaded]);


    const updatePage = (page) => {
        handleNewPage(page);
        setPageLoaded(false);
    }


    return (
        <div className="products p-3">
            {!pageLoaded && <Spinner />}
            <div className='products-wrapper'>
                {products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product} addToBasketFn={addToBasketFn} />
                    )
                })}
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={updatePage} />
        </div>
    )
}