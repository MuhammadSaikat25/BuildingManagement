import logo from "../assets/Logo.png";
import profileAvatar from "../assets/User-avatar.png";
import { NavLink } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      {/* navbar for large device */}
      <div className="bg-white hidden fixed top-0 w-full lg:flex items-center justify-around p-2 z-10">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-7">
          <NavLink
            className={
              "text-purple-600 font-semibold hover:underline duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            className={
              "text-purple-600 font-semibold hover:underline duration-300"
            }
          >
            Apartment
          </NavLink>
          <NavLink
            className={
              "text-purple-600 font-semibold hover:underline duration-300"
            }
          >
            LogIn
          </NavLink>
          <NavLink
            className={
              "text-purple-600 font-semibold hover:underline duration-300"
            }
          >
            Sing Up
          </NavLink>
          <div className="">
            <img className="w-[30px] rounded-full" src={profileAvatar} alt="" />
          </div>
        </div>
      </div>
      {/* --------------------------------- */}

      <div className="flex fixed bg-white top-0 w-full z-40 items-center justify-between lg:hidden">
        <img className="w-[70px]" src={logo} alt="" />
        <div onClick={() => setOpen(!open)} className="">
          {open ? (
            <IoCloseSharp size={25}></IoCloseSharp>
          ) : (
            <RiMenuAddFill size={25}></RiMenuAddFill>
          )}
        </div>
      </div>
      {/* ---------------------------------------- */}
      {open && (
        <div className="lg:hidden fixed top-0 gap-5 text-center bg-slate-900 z-20 h-full w-[50%]">
          <div className="flex gap-14 flex-col text-white h-full overflow-y-scroll">
            <NavLink>Home</NavLink>
            <NavLink>Apartment</NavLink>
            <NavLink>LogIn</NavLink>
            <NavLink>Sing Up</NavLink>
            <div>
              <img
                className="w-[30px] mx-auto rounded-full"
                src={profileAvatar}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
