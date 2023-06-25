import { useEffect, useState } from 'react';


import Products from './Products/Products';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

import fetchProducts from './../api/fetchProducts';



export default function Store() {

    const [productData, setProductData] = useState([]);
    const [page, setPage] = useState(1);
    const [windowWidth, setWindowWidht] = useState(window.innerWidth);


    const handleNewPage = (newPage) => {
        setPage(newPage);
    }
    

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts(page, (windowWidth< 1000 ? 5 : 12));
            setProductData(data)

        }

        loadProducts();

    }, [page])


    return (
        <>
            <div className="products-page">
                <Header />
                <Sidebar />
                {productData.products &&
                    <Products 
                    products={productData.products}
                    total={productData.total}
                    totalPages={productData.totalPages}
                    currentPage={page}
                    handleNewPage={handleNewPage}    
                    />
                }
                <Footer />
            </div>
        </>
    )
}