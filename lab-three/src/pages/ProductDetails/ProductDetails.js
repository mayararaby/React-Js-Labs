import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCardDetails from '../../Component/ProductCardDetails/ProductCardDetails'

export default function ProductDetails(props) {
  const [ProductDetails, setProductDetails] = useState({});
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    axios
      .get(
        `https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/${params.id}`
      )
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <ProductCardDetails ProductDetails={ProductDetails} />;
  return(<h1>
    Details
  </h1>)
}
