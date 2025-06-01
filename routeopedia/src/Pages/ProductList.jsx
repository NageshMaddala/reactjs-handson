import React from "react";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Product List Page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/product/create")}
      >
        Add Product
      </button>
    </div>
  );
}

export default ProductList;
