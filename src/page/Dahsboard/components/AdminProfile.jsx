import { useContext } from "react";
import img from "../../../assets/802043_man_512x512.png";
import getAllBooking from "../../../utils/getAllBooking";
import getAllMembers from "../../../utils/getAllMembers";
import getAllUser from "../../../utils/getAllUser";
import { AuthContext } from "../../../Firebase/AuthProvider";

const AdminProfile = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
  const { Members } = getAllMembers();
  const { User } = getAllUser();
  const { Booking } = getAllBooking();
  const BookingData = Number(Booking?.length);
  const Apartments = 16;
  const percentageBooked = (BookingData / Apartments) * 100;
    const available=((Apartments-BookingData)/Apartments)*100
    console.log(available)

  return (
    <div className="flex justify-center items-center h-full w-full mt-12 lg:mt-0">
      <div className="bg-gray-600 p-7 text-white text-center rounded-lg space-y-4">
        <img className="w-[200px] mx-auto" src={img} alt="" />
        <h1>Name:{user?.displayName}</h1>
        <h1>Email:{user?.email}</h1>
        <h1>Total Apartments:16</h1>
        <h1>Percentage of available rooms: {available}</h1>
        <h1>Percentage of Booking rooms: {percentageBooked}</h1>
        <h1>Member:{Members?.length}</h1>
        <h1>User:{User?.length}</h1>
      </div>
    </div>
  );
};

export default AdminProfile;
