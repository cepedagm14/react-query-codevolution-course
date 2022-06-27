import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHroesData";

const RQSuperHeroPage = () => {
  const onSuccess = (data) => {
    console.log("success", data);
  };

  const onError = () => {};

  const { isLoading, data, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading) {
    return <p>Cargando.....</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.data.map((hero, index) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default RQSuperHeroPage;
