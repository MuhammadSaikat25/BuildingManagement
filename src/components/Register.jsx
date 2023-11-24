import img from "../assets/homeImg.jpg";
import {Link} from 'react-router-dom'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const Register = () => {
  const [hidden,sethidden]=useState(false)
  return (
    <div className="relative">
      <img className="w-full h-screen object-cover" src={img} alt="" />
      <div className="w-full h-full absolute z-10 bg-black top-0 opacity-60"></div>
      <div className=" h-[50%] absolute z-30 lg:left-[550px] top-[200px] md:left-40 md:top-[250px] lg:top-[180px] opacity-80">
        <div className="bg-white relative rounded-md p-10 w-[400px]">
          <form className="flex gap-4 flex-col">
            <input
              className="border-black border rounded p-2"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="border-black border rounded p-2"
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              className="border-black border rounded p-2"
              type="text"
              name="password"
              placeholder="Password"
            />
            <button type="submit" className="bg-blue-800 p-1 rounded text-white">
              Sing Up
            </button>
            <div className="absolute top-[170px] right-14" onClick={()=>sethidden(!hidden)}>
              {
                hidden?<FaRegEye></FaRegEye>:<FaRegEyeSlash></FaRegEyeSlash>
              }
            </div>
          </form>
          <div className="">
            <div className="flex items-center">
              <div className="w-full bg-slate-800 h-[1px]"></div>
              <h1>OR</h1>
              <div className="w-full bg-slate-800 h-[1px]"></div>
            </div>
            <button className="bg-blue-800 p-1 rounded w-full text-white">
              Google
            </button>
            <div className="flex items-center justify-center mt-3">
              <h1>Don't have an account ? </h1>
              <Link className="text-blue-800">sing Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
