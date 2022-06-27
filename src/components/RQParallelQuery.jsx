import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};
const fetchSuperHeroesFriends = () => {
  return axios.get(`http://localhost:4000/friends`);
};
const RQParallelQuery = () => {
  const {
    data: dataHeroes,
    isError: isErrorHeroes,
    isLoading: isLoadingHeroes,
    error: errorHeroes,
  } = useQuery("super-heroes", fetchSuperHeroes);

  const {
    data: dataFriends,
    isError: isErrorFriends,
    isLoading: isLoadingFriends,
    error: errorFriends,
  } = useQuery("super-heroes-friend", fetchSuperHeroesFriends);

  return <div>RQParallelQuery</div>;
};

export default RQParallelQuery;
