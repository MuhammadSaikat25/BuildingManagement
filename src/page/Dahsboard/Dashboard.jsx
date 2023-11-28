import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex lg:flex-row gap-11">
        <DashboardNav></DashboardNav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
