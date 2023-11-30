import { useQuery } from "react-query";
import useInterceptor from '../Hooks/useInterceptor'


const getAllMembers = () => {

const axiosInterceptor=useInterceptor()
  const { isPending, isError, data:Members, error,refetch } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosInterceptor.get(`${import.meta.env.VITE_SERVER}members`);
      return res.data
    },
  });
  return { Members ,refetch};
};

export default getAllMembers;
