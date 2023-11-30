import React, { useEffect, useState } from "react";
import axios from "axios";
const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}getAllCoupons`)
      .then((res) => setCoupons(res.data));
  }, []);
  return (
    <div className="mt-28 ">
      <h1 className="text-center font-semibold mb-5 text-blue-600 text-2xl">
        User Coupons To Get Discount
      </h1>
      <div className=" max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 bg-orange-600 p-6 gap-3 text-white font-semibold rounded-md">
        {coupons?.map((data) => (
          <div className="flex gap-2 items-center">
            <h1>Coupon: {data.coupon}</h1>
           
            <h1>Discount: {data.discount}%</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;
