import { useEffect, useState } from "react";
import getApartments from "../../utils/getApartments";
import SingleApartment from "./SingleApartment";

const Apartments = () => {
  const { data } = getApartments();
  const [apartments, setApartments] = useState([]);
  const [totalAssignment, setTotalAssignment] = useState(16);
  const [loading, setLoading] = useState(false);
  // const [category, setCategory] = useState()
  const perPage = 6;
  const [currentPage, SetCurrentPage] = useState(1);
  const totalPage = Math.ceil(totalAssignment / perPage);
  const page = [...Array(totalPage).keys()];
  useEffect(() => {
    setLoading(true);
    fetch(
      `${
        import.meta.env.VITE_SERVER
      }apartments?page=${currentPage}&limit=${perPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
        setLoading(false);
      });
  }, [currentPage, perPage]);
  console.log(currentPage);
  return (
    <div className="">
      <div className="max-w-7xl mx-auto w-full gap-4 grid grid-cols-4 mt-20">
        {apartments?.map((data) => (
          <SingleApartment key={data._id} apartment={data}></SingleApartment>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <div className="">
          {page?.map((page, i) => (
            <button
              onClick={() => SetCurrentPage(page + 1)}
              className="ml-3 bg-rose-400 px-5 rounded text-white text-2xl"
              key={i}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default Apartments;
