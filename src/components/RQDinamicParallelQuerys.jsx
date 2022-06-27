import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const RQDinamicParallelQuerys = ({ heroId }) => {
const queryResult = useQueries(
    heroId.map((id) => {
      return {
        queryKey: ["super-heroe", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );
  console.log({queryResult});
  return <div>RQDinamicParallelQuerys</div>;
};

export default RQDinamicParallelQuerys;
