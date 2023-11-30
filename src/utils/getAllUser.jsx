import React from "react";
import useInterceptor from "../Hooks/useInterceptor";
import { useQuery } from "react-query";

const getAllUser = () => {
  const axiosInterceptor = useInterceptor();
  const {
    isPending,
    isError,
    data: User,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosInterceptor.get(
        `${import.meta.env.VITE_SERVER}user`
      );
      return res.data;
    },
  });
  return { User, refetch };
};

export default getAllUser;
