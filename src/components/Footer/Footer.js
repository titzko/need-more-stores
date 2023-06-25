import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

export default function Footer() {


    return(
        <div className="footer">
            <div>Made by Titzko</div>
            <div><FontAwesomeIcon icon={faGithub} /> <span className='no-display-mobile'>Github</span></div>
            <div><span className='no-display-mobile'>Contact: </span>matitzko@gmail.com</div>
        </div>
    )
}