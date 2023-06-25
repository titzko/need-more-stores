import './Products.scss';

import ProductCard from './Product/ProductCard';
import Pagination from './Pagination/Pagination';

export default function Products({ products, total, totalPages, currentPage,handleNewPage}) {




    return (

        <div className="products p-3">
            <div className='products-wrapper'>

                {products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product} />
                    )
                })}

            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handleNewPage} />
        </div>
    )
}