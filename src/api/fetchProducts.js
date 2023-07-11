const PRODUCT_DATA_URL = 'https://titzko.github.io/public_api/data/product_data.json';


async function fetchProducts(pageNumber, pageSize = 12, category, brand) {
    const response = await fetch(PRODUCT_DATA_URL);
    let data = await response.json();



    if(category) {
        data.products = data.products.filter((product) => product.category === category)
    }

    if(brand) {
        data.products = data.products.filter((product) => product.brand === brand)
    }

    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    const pageData = data.products.slice(start, end);

    return {
        products: pageData,
        total: data.products.length,
        totalPages: Math.ceil(data.products.length / pageSize)
    };
}


async function fetchAllProducts() {
    const response = await fetch(PRODUCT_DATA_URL);
    return await response.json();
}


export {fetchProducts, fetchAllProducts}
