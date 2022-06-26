import React, {useState} from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroPage = () => {
  const[refetchInterval,setRefetchInterval] = useState(3000)
  // const onSuccess = (data) => {
  //   console.log("Perform side effect after data fetching", data);
  // };

  // const onError = (error) => {
  //   console.log("Perform side effect after encountering error", error);
  // };

  const onSuccess = (data) => {
    if (data.data.length === 4) {
      return setRefetchInterval(false);
    } else {
      return refetchInterval;
    }
    //console.log("perform side-effect after data fetching",data)
  };
  const onError = (error) => {
    //console.log("perform side-effect after encountering error",error)
    if (error) {
      return setRefetchInterval(false);
    }
  };

  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
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
