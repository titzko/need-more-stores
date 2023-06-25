import './App.scss';
import { useEffect } from 'react';
import Store from './components/Store';


function App() {

  const PRODUCT_DATA_URL = 'https://titzko.github.io/public_api/data/product_data.json';

  useEffect(()=> {
    

      async function fetchProducts() {
        const response = await fetch(PRODUCT_DATA_URL)
        const products = await response.json();
        console.log({products})
      }
      

      fetchProducts();
  })


  return (
    <Store />
  );
}

export default App;
