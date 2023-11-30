import React from "react";
import getAllMembers from "../../../utils/getAllMembers";
import useInterceptor from "../../../Hooks/useInterceptor";

const ManageUsers = () => {
  const axiosInterceptor = useInterceptor();
  const { data, refetch } = getAllMembers();

  const removeMember = async (
    apartment_image,
    apartment_no,
    block_name,
    date,
    floor_no,
    rent,
    room_id,
    userEmail,
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
      userEmail,
      userName,
      role: "user",
      status: "checked",
    };
    const res = await axiosInterceptor.patch(`removeMember/${_id}`, obj);
    const userInfo = {
      email: userEmail,
      name: userName,
    };
    const memberToUser = await axiosInterceptor.patch(
      `memberToUser/${userEmail}`,
      userInfo
    );

    refetch();
  };
  return (
    <div className="mt-20">
      {data?.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                User name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                User email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Remove
              </th>
            </tr>
          </thead>
          {/* ------------------------------- */}
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() =>
                      removeMember(
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
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No Member Found</h1>
      )}
    </div>
  );
};

export default ManageUsers;
