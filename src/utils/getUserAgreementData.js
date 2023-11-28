import { useQuery } from "react-query";
import useInterceptor from "../Hooks/useInterceptor";
import { useCallback } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const getUserAgreementData = (email) => {
    // const {user}=useCallback(AuthContext)
    const axiosInterceptor=useInterceptor()
    const { isPending, isError, data:UserRequest, error,refetch } = useQuery({
      queryKey: ["apartments"],
      enabled: !! email,
      queryFn: async () => {
        const res = await axiosInterceptor.get(`${import.meta.env.VITE_SERVER}userAgreement/${email}`);
        // console.log(res.data)
        return res.data
      },
    });
    return { UserRequest ,refetch};
};

export default getUserAgreementData;