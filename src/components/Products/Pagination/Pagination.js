import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Pagination.scss';


export default function Pagination() {
 
    
    return(
        <>
        
        <div className='pagination-wrapper'>
                <div className='nav-btn'>
                <FontAwesomeIcon icon={faChevronLeft} /><span className='no-display-mobile'> Previous</span> </div>
                <div className='nav-btn'>1</div>
                <div className='nav-btn'>2</div>
                <div className='nav-btn'>3</div>
                <div className='nav-btn'> <span className='no-display-mobile'>Next </span><FontAwesomeIcon icon={faChevronRight} /></div>
            </div>
        </>
    )
}