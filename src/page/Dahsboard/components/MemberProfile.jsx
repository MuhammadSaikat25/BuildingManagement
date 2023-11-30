import { useContext, useEffect, useState } from "react";
import useInterceptor from "../../../Hooks/useInterceptor";
import { AuthContext } from "../../../Firebase/AuthProvider";

const MemberProfile = () => {
  const [myApartment, setMyApartment] = useState({});
  const { user } = useContext(AuthContext);
  console.log(user)
  const axiosInterceptor = useInterceptor();
  console.log(myApartment);
  useEffect(() => {
    axiosInterceptor
      .get(`myBooking/${user?.email}`)
      .then((data) => setMyApartment(data.data));
  }, [user?.email]);
  return (
    <div className="">
      {
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                User name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                User email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Floor No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Rent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Apartment No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Block Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Agreement request date
              </th>
            </tr>
          </thead>
          {/* ------------------------------- */}
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                {/* {user?.displa} */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {myApartment.userName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {myApartment.user}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {myApartment.floor_no}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${myApartment.rent}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {myApartment.apartment_no}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {myApartment.block_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {myApartment.date}
              </td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
};

export default MemberProfile;
