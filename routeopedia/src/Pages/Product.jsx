import React from "react";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {
    // This function can be used to determine if we should navigate to a product
    // based on some condition, e.g., user authentication or product availability.
    return false; // Change this based on your logic
  });

  return (
    <div>
      <h1>Product Page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/product/create")}
      >
        Add Product
      </button>

      <Link to={"/product/details/5"}>
        <button className="btn btn-secondary">
          Navigate to product Details - 5
        </button>
      </Link>

      {goToProduct && <Navigate to="/product/details/3" />}
      <button onClick={() => setGoToProduct(true)} className="btn btn-success">
        Navigate to Product Details - 3
      </button>
    </div>
  );
}
export default Product;
