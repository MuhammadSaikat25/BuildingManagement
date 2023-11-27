import { useContext, useEffect, useState } from "react";
import useInterceptor from "../../Hooks/useInterceptor";
import { AuthContext } from "../../Firebase/AuthProvider";

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
  
  return <div>
    
  </div>;
};

export default MyProfile;
