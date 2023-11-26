import { useRef, useState } from "react";
import useInterceptor from "../../../Hooks/useInterceptor";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageCoupons = () => {
  const formRef = useRef(null);
  const [modal, setModal] = useState(false);
  const axiosInterceptor = useInterceptor();
  const postCoupon = async (e) => {
    e.preventDefault();
    const coupon = e.target.coupon.value;
    const description = e.target.description.value;
    const discount = Number(e.target.Discount.value);
    const data = { coupon, description, discount };
    const res = await axiosInterceptor.post("addCoupon", data);
    toast('Coupon add Successful')
    formRef.current.reset();
  };

  return (
    <div className="max-w-7xl mx-auto w-full h-screen">
      <ToastContainer></ToastContainer>
      <div className="flex justify-start mt-16">
        <button
          onClick={() => setModal(!modal)}
          className="bg-teal-600 p-1 rounded text-center text-white mb-5"
        >
          Add Coupon
        </button>
      </div>
      <div className="flex justify-start items-center">
        {modal && (
          <form ref={formRef}
            onSubmit={postCoupon}
            className="border border-black p-7 flex flex-col gap-5 rounded"
          >
            <input
              className="border p-1  rounded border-b-neutral-600"
              type="text"
              name="coupon"
              placeholder="Coupon"
              required
            />
            <input
              className="border p-1  rounded border-b-neutral-600"
              type="number"
              name="Discount"
              max={30}
              placeholder="Discount"
              required
            />

            <textarea
              className="border p-1  rounded border-b-neutral-600"
              name="description"
              id=""
              cols="10"
              rows="7"
              placeholder="Coupon description"
              required
            ></textarea>
            <button className="text-white bg-purple-800 p-1 rounded">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ManageCoupons;
