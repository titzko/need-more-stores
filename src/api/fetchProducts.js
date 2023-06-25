const PRODUCT_DATA_URL = 'https://titzko.github.io/public_api/data/product_data.json';


export default async function fetchProducts(pageNumber, pageSize = 12) {
    const response = await fetch(PRODUCT_DATA_URL);
    const data = await response.json();

    // Calculate the range of data for the current page
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    const pageData = data.products.slice(start, end);

    return {
        products: pageData,
        total: data.products.length,
        totalPages: Math.ceil(data.products.length / pageSize)
    };
}
