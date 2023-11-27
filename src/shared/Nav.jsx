import logo from "../assets/Logo.png";
import profileAvatar from "../assets/User-avatar.png";
import { Link, NavLink } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { user,singOut } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  const logOut=async()=>{
    const res=await singOut()
    setModal(false)
  }
  return (
    <nav className="relative">
      {/* navbar for large device */}
      <div className="bg-white hidden  fixed top-0 w-full lg:flex items-center justify-around p-2 z-10">
        <Link to={"/"} className="flex gap-2 items-center">
          <img className="w-[50px]" src={logo} alt="" />
          <h1 className="font-semibold">Gulshan/BM</h1>
        </Link>
        <div className="flex items-center gap-7">
          <NavLink
            className={
              "text-purple-600 font-semibold "
            }
          >
            Home
          </NavLink>
          <NavLink to={'/aparnments'}
            className={
              "text-purple-600 font-semibold "
            }
          >
            Apartment
          </NavLink>
          {user ? (
            <div className="">
              <div className="">
                <img
                  onClick={() => setModal(!modal)}
                  className="w-[30px] rounded-full cursor-pointer"
                  src={profileAvatar}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink
                to={"/singin"}
                className={
                  "text-purple-600 font-semibold "
                }
              >
                LogIn
              </NavLink>
              <NavLink
                to={"/singup"}
                className={
                  "text-purple-600 font-semibold "
                }
              >
                Sing Up
              </NavLink>
            </div>
          )}
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
            <NavLink to={"/singin"}>LogIn</NavLink>
            <NavLink to={"/singup"}>Sing Up</NavLink>
            <div>
              <img
                className="w-[30px] bg-white mx-auto rounded-full"
                src={profileAvatar}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {modal && (
        <div className="fixed flex flex-col gap-2 top-[70px] z-50 bg-yellow-800 lg:right-[250px] p-2 rounded text-white">
          <Link to={'/Dashboard/myProfile'} onClick={()=>setModal(false)}>Dashboard</Link>
         <Link onClick={logOut}>Logout</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;


