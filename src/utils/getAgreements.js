import { useQuery } from "react-query";
import useInterceptor from "../Hooks/useInterceptor";

const getAgreement = () => {
  const axiosInterceptor = useInterceptor();

  const { isPending, isError, data, error,refetch } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosInterceptor.get("getAgreement");
      return res.data
    },
  });
  return { data,refetch};
};

export default getAgreement;
