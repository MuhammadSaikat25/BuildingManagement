import { useEffect, useRef, useState } from "react";
import useInterceptor from "../../../Hooks/useInterceptor";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const ManageAnnouncement = () => {
  const currentDate = new Date();
  const date = moment(currentDate).format("YYYY-MM-DD");
  const formRef = useRef(null);
  const [modal, setModal] = useState(false);
  const [announcement, setAnnouncement] = useState([]);
  const axiosInterceptor = useInterceptor();
console.log(announcement)
  const postAnnouncement = async (e) => {
    e.preventDefault();
    const Announcement = e.target.Announcement.value;
    const data = { Announcement, date };
    const res = await axiosInterceptor.post("postAnnouncement", data);
    toast("Announcement add Successful");
    formRef.current.reset();
  };

    useEffect(() => {
      axiosInterceptor.get("getAnnouncement").then((res) => setAnnouncement(res.data));
    }, []);
  return (
    <div className="max-w-7xl mx-auto w-full h-screen">
      <ToastContainer></ToastContainer>
      <div className="flex justify-start mt-16">
        <button
          onClick={() => setModal(!modal)}
          className="bg-teal-600 p-1 rounded text-center text-white mb-5"
        >
          Add Announcement
        </button>
      </div>
      <div className="flex justify-start items-center">
        {modal && (
          <form
            ref={formRef}
            onSubmit={postAnnouncement}
            className="border w-[60%] border-black p-7 flex flex-col gap-5 rounded"
          >
            <input
              className="border p-1  rounded border-b-neutral-600"
              type="text"
              name="Announcement"
              placeholder="Announcement"
              required
            />

            <button className="text-white bg-purple-800 p-1 rounded">
              Submit
            </button>
          </form>
        )}
      </div>

      <div className="">
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
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.date}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAnnouncement;
