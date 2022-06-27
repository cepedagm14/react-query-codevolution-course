import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroeDetails } from "../hooks/useSuperHeroeData";

const RQSuperHeroe = () => {
  const { heroId } = useParams();
  const { isLoading, data, error, isError } = useSuperHeroeDetails(heroId);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2>Super Heroe Details</h2>
      <h4>
        {data?.data.name} - {data?.data.alterEgo}
      </h4>
    </div>
  );
};

export default RQSuperHeroe;
