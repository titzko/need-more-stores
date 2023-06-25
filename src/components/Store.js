import Products from  './Products/Products';
import Header from  './Header/Header';
import Sidebar from  './Sidebar/Sidebar';
import Footer from  './Footer/Footer';


export default function Store() {


    return (
        <>
            <div className="products-page">
                <Header />
                <Sidebar />
                <Products />
                <Footer />
            </div>
        </>
    )
}