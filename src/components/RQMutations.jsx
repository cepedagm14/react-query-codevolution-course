import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHroesData";

const RQMutations = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("success data...", data);
  };
  const onError = (error) => {
    console.log("error...", error.message);
  };
  const handleAddHero = (e) => {
    e.preventDefault();
    const hero = { name, alterEgo };
    addHero(hero);
  };

  const { isLoading, data, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
  );

  const {
    mutate: addHero,
    isError: isErrorAddHero,
    isLoading: isLoadingAddHero,
    error: errorAddHero,
    isSuccess: isSuccessAddHero,
    data: dataAddHero,
  } = useAddSuperHeroData();

  if (isLoading || isLoadingAddHero) {
    return <p>Cargando.....</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  if (isErrorAddHero) {
    return <p>{errorAddHero.message}</p>;
  }
  console.log(dataAddHero);
  return (
    <div>
      <h2>RQMutations</h2>
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
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHero}>submit</button>
      </form>
    </div>
  );
};

export default RQMutations;
