import './Products.scss';


import Product from './Product/Product';
import Pagination from './Pagination/Pagination';

export default function Products() {


    return (

        <div className="products p-3">
            <div className='products-wrapper'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <Pagination />
        </div>


    )
}