import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroPage = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <p>Cargando.....</p>;
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
