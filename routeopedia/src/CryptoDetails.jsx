import React from "react";
import { useParams } from "react-router-dom";

function CryptoDetails() {
  // Extract the cryptoSymbol parameter from the URL
  // This will allow us to access the specific cryptocurrency details
  // For example, if the URL is /crypto/bitcoin, cryptoSymbol will be "bitcoin"
  // useParams is a hook provided by react-router-dom to access URL parameters
  // It returns an object of key-value pairs where the keys are the parameter names defined in the route
  // In this case, we are interested in the cryptoSymbol parameter
  // We can send multiple parameters if needed, but here we are focusing on just one
  const { cryptoSymbol, id } = useParams();

  return (
    <div>
      <h4>Crypto Details Page</h4>
      <p>
        This page will display details for the cryptocurrency: &nbsp;&nbsp;&nbsp;
        {/* The cryptoSymbol variable holds the value of the cryptocurrency symbol */}
        {/* For example, if the URL is /crypto/bitcoin, cryptoSymbol will be "bitcoin" */}

        <strong>{cryptoSymbol}</strong>
        <strong> {id}</strong>
      </p>
    </div>
  );
}

export default CryptoDetails;
