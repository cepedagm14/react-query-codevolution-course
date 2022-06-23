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
      // cacheTime: 5000, esta propiedad se usa para agregar un tiempo de cache de las query, por defecto son 5 minutos
      // staleTime: 30000, es el tiempo de permanencia de datos antes de pasar a obsoletos, lo ideal es dejarlo por defecto puesto que su valor es cero
      // refetchOnMount: tiene como valores true - false - always

      // refetchOnWindowFocus:
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
    }
  );

  console.log({ isLoading, isFetching });

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
