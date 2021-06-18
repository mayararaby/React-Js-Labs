import React from "react";
import Card from "react-bootstrap/Card";

export default function ProductCardDetails({ ProductDetails }) {
  console.log(ProductDetails)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5 mb-3">
          <Card className="bg-dark">
            <Card.Img src={ProductDetails.image} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{ProductDetails.name}</Card.Title>
              <Card.Text>
                {ProductDetails.price}
              </Card.Text>
              <Card.Text>
                {ProductDetails.createdAt}
              </Card.Text>
              <Card.Text>
                {ProductDetails.description}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          </div>
        </div>
      </div>
    </>
    
  );
}
