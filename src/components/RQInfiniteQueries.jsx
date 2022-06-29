import React, { Fragment, useState } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const RQInfiniteQueries = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    <p>{error.message}</p>;
  }
  return (
    <div>
      <div>
        <h2>RQInfiniteQueries</h2>

        {data?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.data.map((color) => (
              <h2 key={color.id}>
                {color.id} - {color.label}
              </h2>
            ))}
          </Fragment>
        ))}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Feching..." : null}</div>
    </div>
  );
};

export default RQInfiniteQueries;
