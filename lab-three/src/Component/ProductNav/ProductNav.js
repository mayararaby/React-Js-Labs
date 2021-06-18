import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductNav.css";

const ProductNav = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/Products" activeClassName="active" className="HomeNav" exact >Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Counter" activeClassName="active" className="HomeNav" exact >Counter</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active" className="HomeNav" exact >Home</NavLink>
                </li>
            </ul>
        </nav>
    );

}
export default ProductNav
