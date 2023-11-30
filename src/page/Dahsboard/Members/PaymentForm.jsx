import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import useInterceptor from "../../../Hooks/useInterceptor";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentForm = ({ myApartment, rent }) => {
  const [booking, setBooking] = useState({});
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useInterceptor();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const currentDate = new Date();
  const date = moment(currentDate).format("YYYY-MM-DD");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    axiosInterceptor
      .get(`myBooking/${user?.email}`)
      .then((data) => setBooking(data.data));
  }, [user?.email]);

  // =====================
  useEffect(() => {
    if (rent) {
      axiosInterceptor
        .post(`create-payment-intent`, { rent })
        .then((data) => setClientSecret(data.data.clientSecret));
    }
  }, [rent]);

  const payment = async (e) => {
    e.preventDefault();
    setCardError(null);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // check card info with stripe apis
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError(null);
    }

    // set processing = true then the button will be active
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Unknown",
          },
        },
      });
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        user: user?.displayName,
        email: user?.email,
        date,
        room_number: booking?.block_name,
        room_id: booking?.room_id,
        id: booking?._id,
        payment: "successful",
        transactionId: paymentIntent.id,
        rent
      };
      const res=await axiosInterceptor.post('receivePayment',paymentInfo)
      if(res.status===200){
          toast('Payment Successful')
      }
    }
  
  };
  return (
    <div className="mt-20 w-full ">
      <ToastContainer></ToastContainer>
      <form onSubmit={payment} className="w-full">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <h1>{cardError}</h1>
    </div>
  );
};

export default PaymentForm;
