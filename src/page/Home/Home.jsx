import React, { useContext } from "react";
import Header from "../../components/Home/Header";
import BuldingDetails from "../../components/Home/BuldingDetails";
import BuldingLocation from "../../components/Home/BuldingLocation";
import { AuthContext } from "../../Firebase/AuthProvider";

const Home = () => {
  const {a}=useContext(AuthContext)
  console.log(a)
  return (
    <div className="mt-9 lg:mt-[76px]">
      <Header></Header>
      <BuldingDetails></BuldingDetails>
      <BuldingLocation></BuldingLocation>
    </div>
  );
};

export default Home;
