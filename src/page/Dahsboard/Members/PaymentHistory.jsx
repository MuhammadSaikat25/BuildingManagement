import { useContext, useEffect, useState } from "react";
import useInterceptor from "../../../Hooks/useInterceptor";
import { AuthContext } from "../../../Firebase/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useInterceptor();
  const [userPayment, setUserPayment] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    axiosInterceptor
      .get(`getPayment/${user?.email}`)
      .then((res) => setUserPayment(res.data));
  }, [user]);
  useEffect(() => {
    if (category) {
      axiosInterceptor
        .get(`getPaymentByMonth?email=${user?.email}&month=${category}`)
        .then((res) => setUserPayment(res.data));
    }
  }, [category]);
  return (
    <div className="mt-20">
      <div className="">
        <h1>Search By Month</h1>
        <select
          id="category"
          className="border border-sky-400 w-full  p-1 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>{" "}
        <input type="text" name="" id="" />
      </div>
      {
        userPayment.length>0?<table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              User name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              User email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Room Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              Rent
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
              transactionId{" "}
            </th>
          </tr>
        </thead>
        {/* ------------------------------- */}
        <tbody className="bg-white divide-y divide-gray-200">
          {userPayment?.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.user}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.room_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">${item.rent}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${item.transactionId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>:
        <h1>No Data Found</h1>
      }
    </div>
  );
};

export default PaymentHistory;
