import React from "react";
import { useGetAllDestinationQuery } from "../destinationAPI";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = <p>Success...</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
