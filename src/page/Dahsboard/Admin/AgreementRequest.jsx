import { useEffect, useState } from "react";
import useInterceptor from "../../../Hooks/useInterceptor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AgreementRequest = () => {
  const axiosInterceptor = useInterceptor();
  const [agreements, setAgreements] = useState([]);
  useEffect(() => {
    axiosInterceptor
      .get("getAgreement")
      .then((data) => setAgreements(data.data));
  }, []);

  const handelAgreement = async (
    apartment_image,
    apartment_no,
    block_name,
    date,
    floor_no,
    rent,
    room_id,
    user,
    userName,
    _id
  ) => {
    const obj = {
      apartment_image,
      apartment_no,
      block_name,
      date,
      floor_no,
      rent,
      room_id,
      user,
      userName,

      role: "member",
      status: "checked",
    };
    const res = await axiosInterceptor.patch(`handelAgreement/${_id}`, obj);
    toast("Agreement Accept successful");
  };
  
  return (
    <div className="mt-20">
      <ToastContainer></ToastContainer>
      {agreements && (
        <div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Floor No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Block Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agreement request date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Accept
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reject
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {agreements.map((item) => (
                <tr
                  key={item._id}
                  className={`${
                    item.role === "member" && "bg-green-500 text-white"
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.userName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.floor_no}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.rent}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{""}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.block_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td
                    onClick={() =>
                      handelAgreement(
                        item.apartment_image,
                        item.apartment_no,
                        item.block_name,
                        item.date,
                        item.floor_no,
                        item.rent,
                        item.room_id,
                        item.user,
                        item.userName,
                        item._id
                      )
                    }
                    className="px-6 py-4 whitespace-nowrap "
                  >
                    <button className={`${item.role ==='member'?"":'bg-green-500 text-white p-1 rounded'}`} disabled={item.role === "member"}>Accept</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      disabled={item.role === "member"}
                      className={`${
                        item.role === "member"
                          ? ""
                          : "bg-red-500 p-1 rounded text-white"
                      }`}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AgreementRequest;
