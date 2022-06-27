import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchChannel = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const RQDependenQuery = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  const {
    data: courses,
    isIdle,
    isLoading,
    isError,
    error,
  } = useQuery(["courses", channelId], () => fetchChannel(channelId), {
    enabled: !!channelId,
  });

  if (isLoading || isIdle) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log(courses);
  return <div>RQDependenQuery</div>;
};

export default RQDependenQuery;
