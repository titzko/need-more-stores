import { useEffect, useState } from 'react';


import Products from './Products/Products';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import { createApi } from 'unsplash-js';
import imageData from './unsplash-cache.json';

import fetchProducts from './../api/fetchProducts';


export default function Store() {

    const [productData, setProductData] = useState([]);
    const [page, setPage] = useState(1);

    const handleNewPage = (newPage) => {
        setPage(newPage);
    }

    useEffect(() => {
        const loadProducts = async () => {
            const productData = await fetchProducts(page, (window.innerWidth < 1000 ? 4 : 9));

            const unsplash = createApi({
                accessKey: process.env.REACT_APP_ACCESS_KEY,
            });

            const promises = productData.products.map((singleProduct) => {
                const productName = singleProduct.product_name.split('-')[0].trim();

                if (imageData[productName]) {
                    return Promise.resolve({ ...singleProduct, imageUrl: imageData[productName] });
                } else {
                    return unsplash.search.getPhotos({
                        query: productName,
                        orientation: 'portrait',
                    }).then(result => {
                        if (!result.errors && result.results > 0) {
                            const photos = result.response;
                            return { ...singleProduct, imageUrl: photos.results[0].links.download };
                        } else {
                            console.log(result.errors)
                            const imageUrl = "https://via.placeholder.com/150"
                            return { ...singleProduct, ...{imageUrl} };
                        }
                    });
                }
            });

            Promise.all(promises).then(updatedProducts => {
                setProductData({ ...productData, products: updatedProducts });
            }).catch((err) => {
                console.log(err)
            });

        }
        loadProducts();

    }, [page]);



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