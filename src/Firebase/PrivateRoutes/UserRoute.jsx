import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
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
  if (user) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default UserRoute;
