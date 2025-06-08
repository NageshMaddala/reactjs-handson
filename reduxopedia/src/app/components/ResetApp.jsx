import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/slice/counterSlice";
import { resetDestination } from "../../redux/slice/destinationSlice";
import { resetReduxOPedia } from "../../redux/action/actions";

function ResetApp() {
  const dispatch = useDispatch();

  const resetCounterAndDestination = () => {
    dispatch(resetDestination());
    // dispatch(reset());
  };

  const resetCounterAndDestinationUsingCustomAction = () => {
    dispatch(resetReduxOPedia());
  };

  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => resetCounterAndDestination()}
      >
        Reset App
      </button>{" "}
      &nbsp; &nbsp;&nbsp;&nbsp;
      <button
        className="btn btn-secondary ms-10"
        onClick={() => resetCounterAndDestinationUsingCustomAction()}
      >
        Reset App using Custom Action
      </button>
    </div>
  );
}

export default ResetApp;
