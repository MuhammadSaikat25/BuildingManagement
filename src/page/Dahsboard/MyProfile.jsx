import { useContext, useEffect, useState } from "react";
import useInterceptor from "../../Hooks/useInterceptor";
import MemberProfile from "./components/MemberProfile";
import { AuthContext } from "../../Firebase/AuthProvider";
import UserProfile from "./components/UserProfile";
import AdminProfile from "./components/AdminProfile";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const userInfo = user?.email;
  const axiosInterceptor = useInterceptor();
  const [role, setRole] = useState("");
  useEffect(() => {
    if (userInfo) {
      axiosInterceptor
        .get(`${import.meta.env.VITE_SERVER}userRole/${userInfo}`)
        .then((res) => setRole(res.data.role))
        .catch((error) => console.error(error));
    }
  }, [userInfo]);

  return (
    <div className="">
      {role === "member" && <MemberProfile></MemberProfile>}
      {role === "user" && <UserProfile></UserProfile>}
      {role === "admin" && <AdminProfile></AdminProfile>}
    </div>
  );
};

export default MyProfile;
