import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details Page</h1>
      <strong>Product ID:</strong> {productId}
    </div>
  );
}

export default ProductDetails;
