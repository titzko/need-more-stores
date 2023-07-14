import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

export default function Footer() {


    return (
        <div className="footer">
            <div>Made by Titzko</div>
            <a href='https://github.com/titzko/need-more-stores'><FontAwesomeIcon icon={faGithub} /> <span className='no-display-mobile'>Github</span></a>
            <div><span className='no-display-mobile'>Contact: </span>matitzko@gmail.com</div>
        </div>
    )
}