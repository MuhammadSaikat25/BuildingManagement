import getApartments from "../../utils/getApartments";
import SingleApartment from "./SingleApartment";


const Apartments = () => {
  const { data } = getApartments()
  
  return (
    <div className="max-w-7xl mx-auto w-full gap-4 grid grid-cols-4 mt-20">
      {data?.map((data) => (
        <SingleApartment key={data._id} apartment={data}></SingleApartment>
      ))}
    </div>
  );
};

export default Apartments;
