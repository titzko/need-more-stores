import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Pagination.scss';


export default function Pagination({ totalPages, currentPage, onPageChange }) {



    const handleNewPageClick = (newPage) => {
        onPageChange(newPage)
    }


    const handlePreviousClick = () => {
        (currentPage > 1) && onPageChange(currentPage - 1)
    }


    const handleNextClick = () => {
        (currentPage < totalPages) && onPageChange(currentPage + 1)
    }


    return (
        <>
            <div className='pagination-wrapper'>
                <div className='nav-btn' onClick={() => { handlePreviousClick() }}>
                    <FontAwesomeIcon icon={faChevronLeft} /><span className='no-display-mobile'> Previous</span>
                </div>
                
                {Array.from(Array(totalPages).keys()).map((element, index) => {
                    return (
                        <div className={'nav-btn no-display-mobile' + ((currentPage === element + 1) ? ' current-page-btn' : '')}
                            onClick={() => { handleNewPageClick(element + 1) }} key={index} >
                            {element + 1}
                        </div>
                    )
                })}
                <div className='nav-btn' onClick={() => { handleNextClick() }}>
                    <span className='no-display-mobile'>Next </span><FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </>
    )
}
