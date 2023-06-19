import './App.css';
import BootstrapTest from  './components/BootstrapTest';
import { useEffect } from 'react';


function App() {


  // https://titzko.github.io/public_api/data/product_data.json
  useEffect(()=> {
    console.log("xd")

      async function fetchProducts() {
        const response = await fetch("https://titzko.github.io/public_api/data/product_data.json")
        const products = await response.json();
        console.log({products})
      }
      

      fetchProducts();
  })


  return (
    <div className="App">
      <header className="App-header">

      <div className='w-75'>
      <BootstrapTest />
      </div>


      </header>
    </div>
  );
}

export default App;
