import React, { useEffect, useState } from "react";
import useInterceptor from "../../Hooks/useInterceptor";

const Announcement = () => {
  const [announcement, setAnnouncement] = useState([]);
  const axiosInterceptor = useInterceptor();
  console.log(announcement);
  useEffect(() => {
    axiosInterceptor
      .get("UM/Announcement")
      .then((res) => setAnnouncement(res.data));
  }, []);
  return (
    <div className="mt-20">
      {announcement.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Announcement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          {/* ------------------------------- */}
          <tbody className="bg-white divide-y divide-gray-200">
            {announcement?.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span>{item.Announcement}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>There is No Announcement</h1>
      )}
    </div>
  );
};

export default Announcement;
