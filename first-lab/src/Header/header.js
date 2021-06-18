import './header.css';
import ProfileLogo from '../assets/Images/header.jpg'

const ImageHeader = () => {
    return (
        <div className="container-fluid container-fluid-header">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5 mb-3">
                    <h1 className="mt-5 text-center header-text">
                        Mayar Araby
                    </h1>
                    <h3 className="mt-3 text-center header-text">
                        Web Developer & Designer
                    </h3>
                    <button type="button" className="btn btn-warning mt-4 text-center btnHeader">Contact Me</button>
                </div>
                <div className="col-xs-12 col-sm12 col-md-12 col-lg-6 col-xl-6">
                    <img src={ProfileLogo} />
                </div>
            </div>
        </div>
    )
};

export default ImageHeader;

