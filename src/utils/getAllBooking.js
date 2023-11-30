import { useQuery } from "react-query";
import useInterceptor from '../Hooks/useInterceptor'


const getAllBooking = () => {

const axiosInterceptor=useInterceptor()
  const { isPending, isError, data:Booking, error,refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosInterceptor.get(`${import.meta.env.VITE_SERVER}booking`);
      return res.data
    },
  });
  return { Booking ,refetch};
};

export default getAllBooking;
