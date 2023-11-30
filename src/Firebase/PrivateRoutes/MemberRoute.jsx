import { useContext, useEffect, useState } from "react";
import useInterceptor from "../../Hooks/useInterceptor";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
const MemberRoute = ({children}) => {
  const axiosInterceptor = useInterceptor();
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = user?.email;
  useEffect(() => {
    if (userInfo) {
      axiosInterceptor
        .get(`${import.meta.env.VITE_SERVER}userRole/${userInfo}`)
        .then((res) =>{
          setRole(res.data.role)
          setIsLoading(false)
        })
        .catch((error) => console.error(error));
    }
  }, [userInfo]);

  if (loading || isLoading) {
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    );
  }
  if (user && role==='member') {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default MemberRoute;
