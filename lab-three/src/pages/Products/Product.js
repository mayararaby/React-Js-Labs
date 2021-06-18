import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ProductCard from '../../Component/ProductCard/ProductCard'
import './Products.css'

export default function Products(props) {
  const [Products, setProducts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products"
      )
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row my-4">
      {Products.map((Products, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ProductCard Products={Products} />
          </div>
        ))}
      </div>
    </>
  );
}
