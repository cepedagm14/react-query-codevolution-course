import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      enabled: false,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <p>Cargando.....</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroPage;
