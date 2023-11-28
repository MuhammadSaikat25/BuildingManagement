import { useQuery } from "react-query";
import useInterceptor from '../Hooks/useInterceptor'


const getAllMembers = () => {

const axiosInterceptor=useInterceptor()
  const { isPending, isError, data, error,refetch } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosInterceptor.get(`${import.meta.env.VITE_SERVER}allMembers`);
      return res.data
    },
  });
  return { data ,refetch};
};

export default getAllMembers;
