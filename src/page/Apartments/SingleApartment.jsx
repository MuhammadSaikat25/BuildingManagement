import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Firebase/AuthProvider";
import useInterceptor from "../../Hooks/useInterceptor";
import moment from "moment";

const SingleApartment = ({ apartment }) => {
  const axiosInterceptor = useInterceptor();
  const { user } = useContext(AuthContext);
  const { apartment_image, _id, block_name, apartment_no, floor_no, rent } =
    apartment;
  const currentDate = new Date();
  const date = moment(currentDate).format("YYYY-MM-DD");
  const [roal, setRoal] = useState("");
  
  const booking = async () => {
    if (!user) {
      return toast("Please login for rent");
    }
    const data = {
      apartment_image,
      room_id: _id,
      apartment_no,
      floor_no,
      rent,
      block_name,
      user: user?.email,
      status: "pending",
      date,
    };
    const res = await axiosInterceptor.post("agreement", data);
  };
  const userInfo = user?.email;
  useEffect(() => {
    if (userInfo) {
      axiosInterceptor
        .get(`${import.meta.env.VITE_SERVER}userRoal/${userInfo}`)
        .then((res) => setRoal(res.data.role))
        .catch((error) => console.error(error));
    }
  }, [userInfo]);

  return (
    <>
      <div className="w-fit p-1 border-black border rounded-md text-center text-slate-600">
        <ToastContainer></ToastContainer>
        <img
          className="w-[200px] rounded h-[150px]"
          src={apartment_image}
          alt=""
        />
        <h1>Block: {block_name}</h1>
        <h1>Aparnment: {apartment_no}</h1>
        <h1>Floor: {floor_no}</h1>
        <h1>Rent: ${rent}</h1>
        <button
          disabled={roal === "admin"}
          onClick={booking}
          className="bg-blue-700 p-1 rounded text-white w-full"
        >
          Agreement button
        </button>
      </div>
    </>
  );
};

export default SingleApartment;
