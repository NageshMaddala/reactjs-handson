import React from "react";
import AddDestination from "./AddDestination";
import DestinationList from "./DestinationList";

function DestinationIndex() {
  return (
    <div className="text-white-50">
      <div>
        <h1
          className="text-success text-center mt-2 pb-2 mb-3"
          style={{ borderBottom: "2px solid #777" }}
        >
          Travel List
        </h1>
        <AddDestination />
        <DestinationList />
      </div>
    </div>
  );
}

export default DestinationIndex;
