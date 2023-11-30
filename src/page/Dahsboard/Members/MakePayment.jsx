import { useContext, useEffect, useState } from "react";
import useInterceptor from "../../../Hooks/useInterceptor";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const MakePayment = () => {
  const [myApartment, setMyApartment] = useState({});
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useInterceptor();
  const navigate=useNavigate()
  useEffect(() => {
    axiosInterceptor
      .get(`myBooking/${user?.email}`)
      .then((data) => setMyApartment(data.data));
  }, [user?.email]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className=" mt-20 flex flex-col gap-4 bg-gray-300 p-20 rounded">
        <input
          className="border border-stone-950 p-2 rounded"
          type="text"
          value={myApartment?.user}
        />
        <input
          className="border border-stone-950 p-2 rounded"
          type="text"
          value={`Floor: ${myApartment?.floor_no}`}
        />
        <input
          className="border border-stone-950 p-2 rounded"
          type="text"
          value={`Block Name : ${myApartment?.block_name}`}
        />
        <input
          className="border border-stone-950 p-2 rounded"
          type="text"
          value={`Apartment: ${myApartment?.apartment_no}`}
        />
        <input
          className="border border-stone-950 p-2 rounded"
          type="text"
          value={`Rent: ${myApartment?.rent}`}
        />
        <Link to={'/Dashboard/payment'} className="bg-blue-600 p-1 rounded text-white">Pay</Link>
      </div>
    </div>
  );
};

export default MakePayment;
