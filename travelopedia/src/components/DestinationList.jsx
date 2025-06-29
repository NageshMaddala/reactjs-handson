import React from "react";
import { useGetAllDestinationQuery } from "../api/destinationApi";
import { useDeleteDestinationMutation } from "../api/destinationApi";
import Destination from "./Destination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();

  const [deleteDestination, results] = useDeleteDestinationMutation();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data.map(({ id, city, country, daysNeeded }) => (
      <Destination destination={{ id, city, country, daysNeeded }} key={id} />
    ));
    return <div className="pt-3">{content}</div>;
  } else if (isError) {
    content = <p className="text-danger">{error.message}</p>;
    return <div className="pt-3">{content}</div>;
  }
}

export default DestinationList;
