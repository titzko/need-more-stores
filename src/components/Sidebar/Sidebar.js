import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faTrademark, faDollarSign } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.scss';


export default function Sidebar() {
    return <div className="sidebar">
        <div className='py-3 px-4'>
             <b><FontAwesomeIcon icon={faTags} /> Categories</b>
            <ul>
                <li>Category</li>
                <li>Category</li>
                <li>Category</li>
                <li>Category</li>
                <li>Category</li>
            </ul>
        </div>
        <hr className="hr" />
        <div className='py-3 px-4'>
             <b><FontAwesomeIcon icon={faTrademark}  /> Brands</b>
            <ul>
                <li>Brand</li>
                <li>Brand</li>
                <li>Brand</li>
                <li>Brand</li>
                <li>Brand</li>
            </ul>
        </div>
        <hr className="hr" />
        <div className='py-3 px-4'>
             <b><FontAwesomeIcon icon={faDollarSign} /> Price</b>
            <ul>
                <li>0-10</li>
                <li>10-25</li>
                <li>25-50</li>
                <li>50-100</li>
                <li>100+</li>
            </ul>
        </div>
    </div>
}
