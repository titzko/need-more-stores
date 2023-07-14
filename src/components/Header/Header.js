import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import BasketDialog from '../Basket/BasketDialog';
import { useState } from 'react';
import './Header.scss';


// header - just the header -> offers anchors for 1) landing page 2) search for product 3) checkout
export default function Header({ basket, removeFromBasketFn }) {

    const [basketModalShow, setBasketModalShow] = useState(false);

    const openBasketDialog = () => {
        setBasketModalShow(true);
    }


    return (
        <div className='header'>
            <div className='store-name'>Random Store</div>
            <ul className='nav-links' >
                <li><FontAwesomeIcon icon={faHome} /> <span className='no-display-mobile'>Home </span></li>
                <button data-basket-amount={basket.size} className='header-btn' onClick={openBasketDialog}><FontAwesomeIcon icon={faShoppingBasket} className='px-1' /><span className='no-display-mobile'>Basket</span></button>
            </ul>

            <BasketDialog show={basketModalShow} onHide={() => setBasketModalShow(false)} basket={basket} removeFromBasketFn={removeFromBasketFn} />
        </div>
    )
}