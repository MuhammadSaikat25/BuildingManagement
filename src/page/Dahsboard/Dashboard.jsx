import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="">
      {user ? (
        <div className="flex lg:flex-row gap-11">
          <DashboardNav></DashboardNav>
          <Outlet></Outlet>
        </div>
      ) : (
        <div className="w-[200px] h-screen bg-slate-50"></div>
      )}
    </div>
  );
};

export default Dashboard;
