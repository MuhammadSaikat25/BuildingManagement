import React from "react";
import Header from "../../components/Home/Header";
import BuldingDetails from "../../components/Home/BuldingDetails";
import BuldingLocation from "../../components/Home/BuldingLocation";

const Home = () => {
  return (
    <div className="mt-9 lg:mt-[76px]">
      <Header></Header>
      <BuldingDetails></BuldingDetails>
      <BuldingLocation></BuldingLocation>
    </div>
  );
};

export default Home;
