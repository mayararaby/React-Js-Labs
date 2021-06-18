import React from "react";
import { Link } from "react-router-dom"; 

export default function ProductCard({ Products }) {
    // console.log(Products)
    return (

        <div className="col-xs-9">
            <div className="card" >
                <img className="card-img-top" alt="Card image" src={Products.image} style={{ width: "50%" }} />
                <div className="card-body">
                    <h4 className="card-title">{Products.name}</h4>
                    <p className="card-text">Price : {Products.price}</p>
                    <Link to={`/product-details/${Products.id}`}>See Details</Link>
                </div>
            </div>
        </div>

    );
}

