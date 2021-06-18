

import React from "react";
import './HomeHeader.css';
import HomeImage from '../../assets/images/homeImage.jpg'
import { Link } from "react-router-dom";

const HomeHeader = () => {
    return (
        <div className="container-fluid container-fluid-header">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5 mb-3">
                    <h1 className="mt-5 text-center header-text">
                        Our Products
                    </h1>
                    <h3 className="mt-3 text-center header-text">
                    Lorem ipsum dolor sit amet consectetur 
                    </h3>
                    <button type="button" className="btn btn-danger mt-4 text-center">
                    <Link to="/Products" className="getStarted">Get Starts</Link>
                    </button>
                </div>
                <div className="col-xs-12 col-sm12 col-md-12 col-lg-6 col-xl-6">
                    <img src={HomeImage} />
                </div>
            </div>
        </div>
    );

}
export default HomeHeader
