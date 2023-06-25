import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import './Header.scss';


// header - just the header -> offers anchors for 1) landing page 2) search for product 3) checkout
export default function Header() {


    return (
        <div className='header'>
            <div className='store-name'>Random Store</div>
            <ul className='nav-links' >
                <li><FontAwesomeIcon icon={faHome} /> <span className='no-display-mobile'>Home </span></li>
                <li><FontAwesomeIcon icon={faSearch} /> <span className='no-display-mobile'> Search </span></li>
                <li><FontAwesomeIcon icon={faShoppingBasket} />  <span className='no-display-mobile'>Basket</span></li>
            </ul>
        </div>
    )
}