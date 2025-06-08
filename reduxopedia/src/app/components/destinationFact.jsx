import React from "react";
import { useSelector } from "react-redux";

function DestinationFact() {
  const selectedDestination = useSelector(
    (state) => state.destinationStore.destinationSelected
  );

  if (selectedDestination === undefined || selectedDestination === null) {
    return (
      <div className="text-center pt-4 text-warning">Select a Destination</div>
    );
  } else {
    return (
      <div className="text-center border p-3 m-3">
        <h4 className="text-warning">{selectedDestination.name}</h4>
        <br />
        <h4 className="text-warning">{selectedDestination.description}</h4>
        <br />
        <h4 className="text-warning">{selectedDestination.image}</h4>
        <br />
        <h4 className="text-warning">{selectedDestination.country}</h4>
      </div>
    );
  }
}

export default DestinationFact;
