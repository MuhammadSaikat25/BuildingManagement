import { useQuery } from "react-query";

const getApartments = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER}apartments`);
      return res.json();
    },
  });
  return { data ,isPending};
};

export default getApartments;
