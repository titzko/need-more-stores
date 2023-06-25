import './Products.scss';

import Product from './Product/Product';
import Pagination from './Pagination/Pagination';
import { useEffect } from 'react';

export default function Products({ products, total, totalPages, currentPage,handleNewPage}) {




    return (

        <div className="products p-3">
            <div className='products-wrapper'>

                {products.map((product, index) => {
                    return (
                        <Product key={index} product={product} />
                    )
                })}

            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handleNewPage} />
        </div>
    )
}