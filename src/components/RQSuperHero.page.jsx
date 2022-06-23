import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      cacheTime: 5000,
    }

  );

  console.log({isLoading, isFetching});

  if (isLoading) {
    return <p>Cargando.....</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroPage;
