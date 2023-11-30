import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { AuthContext } from "../../../Firebase/AuthProvider";
import useInterceptor from "../../../Hooks/useInterceptor";
const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);

const Payment = () => {
  const [myApartment, setMyApartment] = useState({});
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useInterceptor();
  const rent = Number(myApartment.rent);
  useEffect(() => {
    axiosInterceptor
      .get(`myBooking/${user?.email}`)
      .then((data) => setMyApartment(data.data));
  }, [user?.email]);
  
  return (
    <div className="w-[70%]">
      <Elements stripe={stripePromise}>
        <PaymentForm myApartment={myApartment} rent={rent}></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;
