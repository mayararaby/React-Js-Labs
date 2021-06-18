import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'







const Footer = () => {
    return (
        <div className="container-fluid mt-5 bgFooter">
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-xl-4 col-lg-4 mt-3 mb-2 text-center ">
                    <h3 className="footerHeader mt-3">
                        GET IN TOUCH
                    </h3>
                    <br />
                    <p className="PFooter">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Test@gmail.com
                    </p>
                    <p className="PFooter">
                        <FontAwesomeIcon icon={faIdCard} />
                        +02 0111 111 11
                    </p>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-xl-4 col-lg-4 mt-3 mb-2 text-center ">
                    <button type="button" className="btn btn-warning mt-4 text-center btnHeader mt-5">CONTACT ME</button>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-xl-4 col-lg-4 mt-3 mb-2 text-center ">
                    <p className="mt-4">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </p>
                    <p className="PFooter">
                        CopyRight &copy; 2021
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;

