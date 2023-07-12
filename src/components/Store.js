import { useEffect, useState } from 'react';


import Products from './Products/Products';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import PurchasingDialog from './PurchasingDialog/PurchasingDialog';
import { createApi } from 'unsplash-js';
import imageData from './unsplash-cache.json';
import Button from 'react-bootstrap/Button';

import { fetchProducts, fetchAllProducts } from './../api/fetchProducts';


export default function Store() {

    const [productData, setProductData] = useState([]);
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    const [brands, setBrands] = useState([]);
    const [currentBrand, setCurrentBrand] = useState("");
    const [purchasingModalShow, setPurchasingModalShow] = useState(false);
    const [purchasingProduct, setPurchasingProduct] = useState({});


    const handleNewPage = (newPage) => {
        setPage(newPage);
    }

    function updateCurrentCategory(updateCategory) {
        setCurrentCategory(updateCategory);
    }

    function updateCurrentBrand(updateBrand) {
        setCurrentBrand(updateBrand)
    }

    const addToBasketFn = (productForBasket) => {
        setPurchasingModalShow(true);
        setPurchasingProduct(productForBasket)
        console.log(productForBasket)
    }

    useEffect(() => {

        const getSidebarInfos = async () => {
            const response = await fetchAllProducts();

            const allCategories = new Set();
            const allBrands = new Set();
            response.products.forEach(element => {
                allCategories.add(element.category);
                allBrands.add(element.brand);
            })
            setCategories(Array.from(allCategories));
            setBrands(Array.from(allBrands));


        }

        getSidebarInfos();
    }, [])

    useEffect(() => {
        const loadProducts = async () => {
            const productMetaData = await fetchProducts(page, (window.innerWidth < 1000 ? 4 : 9), currentCategory, currentBrand);

            const unsplash = createApi({
                accessKey: process.env.REACT_APP_ACCESS_KEY,
            });

            const promises = productMetaData.products.map((singleProduct) => {
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
                            return { ...singleProduct, ...{ imageUrl } };
                        }
                    });
                }
            });

            Promise.all(promises).then(updatedProducts => {
                setProductData({ ...productMetaData, products: updatedProducts });

            }).catch((err) => {
                console.log(err)
            });

        }
        loadProducts();

    }, [page, currentCategory, currentBrand]);



    return (
        <>
            <div className="products-page">
                <Button variant="primary" onClick={() => setPurchasingModalShow(true)}>
                    Launch vertically centered modal
                </Button>
                <PurchasingDialog  show={purchasingModalShow}  onHide={() => setPurchasingModalShow(false)} product={purchasingProduct}/>
                <Header />
                <Sidebar
                    categories={categories}
                    brands={brands}
                    updateCategoryFn={updateCurrentCategory}
                    updateBrandFn={updateCurrentBrand}
                    currentBrand={currentBrand}
                    currentCategory={currentCategory}
                />
                {productData.products &&
                    <Products
                        products={productData.products}
                        totalPages={productData.totalPages}
                        currentPage={page}
                        handleNewPage={handleNewPage}
                        addToBasketFn={addToBasketFn}
                    />
                }
                <Footer />
            </div>
        </>
    )
}