import React, { useContext } from "react";
import Header from "../../components/Home/Header";
import BuldingDetails from "../../components/Home/BuldingDetails";
import BuldingLocation from "../../components/Home/BuldingLocation";
import Coupons from "../../components/Home/Coupons";

const Home = () => {
  return (
    <div className="mt-9 lg:mt-[76px]">
      <Header></Header>
      <BuldingDetails></BuldingDetails>
      <BuldingLocation></BuldingLocation>
      <Coupons></Coupons>
    </div>
  );
};

export default Home;
