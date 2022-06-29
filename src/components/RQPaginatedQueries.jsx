import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const RQPaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    <p>{error.message}</p>;
  }
  return (
    <div>
      <div>
        <h2>RQPaginatedQueries</h2>

        {data?.data.map((color) => (
          <h3 key={color.id}>
            {color.id} - {color.label}
          </h3>
        ))}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>
      {isFetching && "Loading..."}
    </div>
  );
};

export default RQPaginatedQueries;
