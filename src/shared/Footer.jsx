import logo from "../assets/logo.png";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20 bg-stone-900 text-white p-5">
      <div className="flex flex-col gap-5  lg:flex-row justify-around">
        <img className="w-[50px] object-contain" src={logo} alt="" />
        <div className="">
          <h1>Gulshan, Dhaka</h1>
          <div className="">
            <p className="flex items-center gap-2">
              <span>
                <FaLocationDot></FaLocationDot>
              </span>
              738 Mill Run RdMill Run,
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaLocationDot></FaLocationDot>
              </span>
              (623) 271-7323
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaLocationDot></FaLocationDot>
              </span>
              Support247@Gmail.Com
            </p>
          </div>
        </div>
        <div className="">
          <h1>Login Now</h1>
          <Link className="text-blue-500" to={"/singin"}>
            Login
          </Link>
        </div>
      </div>
    <div className="w-full h-[2px] bg-white mt-10"></div>
    <div className="">
        <h1 className="text-center">COPYRIGHT © 2023  Gulshan/BM || ALL RIGHTS RESERVED</h1>
    </div>
    </div>
  );
};

export default Footer;
