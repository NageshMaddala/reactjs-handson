import React from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  return (
    <div>
      Create Product Page
      <button
        onClick={() => {
          // This button will navigate back to the product list page
          // window.history.back();
          // Alternatively, you can use the navigate function from react-router-dom
          // to go back to the previous page in the history stack.
          // This is useful if you want to navigate back programmatically.
          // The -1 argument means to go back one step in the history stack.
          // If you want to go back multiple steps, you can change the number.
          // For example, navigate(-2) would go back two steps.
          // This is a more controlled way to navigate back in the application.
          navigate(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default CreateProduct;
