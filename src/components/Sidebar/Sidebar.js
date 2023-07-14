import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faTrademark } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.scss';


export default function Sidebar({ categories, brands, updateCategoryFn, updateBrandFn, currentCategory, currentBrand }) {



    return
    <div className="sidebar">
        <div className='py-3 px-4'>
            <b><FontAwesomeIcon icon={faTags} /> Categories</b>
            <ul>
                <li onClick={() => updateCategoryFn("")} className={!currentCategory ? "sidebar-selected" : ""}>
                    All Categories
                </li>
                {categories.map((category, index) => {
                    return (
                        <li key={index} onClick={() => updateCategoryFn(category)} className={currentCategory === category ? "sidebar-selected" : ""}>
                            {category}
                        </li>
                    )
                })}
            </ul>
        </div>
        <hr className="hr" />
        <div className='py-3 px-4'>
            <b><FontAwesomeIcon icon={faTrademark} /> Brands</b>
            <ul>
                <li onClick={() => updateBrandFn("")} className={!currentBrand ? "sidebar-selected" : ""}>
                    All Brands
                </li>
                {brands.map((brand, index) => {
                    return (
                        <li key={index} onClick={() => updateBrandFn(brand)} className={currentBrand === brand ? "sidebar-selected" : ""} >
                            {brand}
                        </li>
                    )
                })}
            </ul>
        </div>
        <hr className="hr" />
    </div>
}
