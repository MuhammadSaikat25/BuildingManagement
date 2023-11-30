import { useContext, useEffect, useState } from "react";
import useInterceptor from "../../Hooks/useInterceptor";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../assets/Logo.png";

const DashboardNav = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useInterceptor();
  const [role, setRole] = useState(null);
  const userInfo = user?.email;
  useEffect(() => {
    if (userInfo) {
      axiosInterceptor
        .get(`${import.meta.env.VITE_SERVER}userRole/${userInfo}`)
        .then((res) => setRole(res.data.role))
        .catch((error) => console.error(error));
    }
  }, [userInfo]);

  return (
    <div className="">
      <div className="hidden bg-slate-950 h-screen lg:w-[200px] text-white lg:block p-5">
        {role === "admin" && (
          <div className="flex flex-col gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/Dashboard/myProfile"}
            >
              Profile
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/Dashboard/ManageUser"}
            >
              Mange Member
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/Dashboard/AgreementRequest"}
            >
              Agreement Request
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/Dashboard/ManageCoupons"}
            >
              ManageCoupons
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/Dashboard/ManageAnnouncement"}
            >
              Announcement
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </div>
        )}
        {role === "user" && (
          <div className="flex flex-col gap-5">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/Dashboard/myProfile"}
            >
              Profile
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/Dashboard/Annoucement"}
            >
              Announcements
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-400 p-1 rounded" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </div>
        )}
        {role === "member" && (
          <div className="p-2 flex flex-col gap-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-500 p-1 text-white rounded" : ""
              }
              to={"/Dashboard/myProfile"}
            >
              My Profile
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-500 p-1 text-white rounded" : ""
              }
              to={"/Dashboard/makePayment"}
            >
              Make Payment
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-500 p-1 text-white rounded" : ""
              }
              to={"/Dashboard/PaymentHistory"}
            >
              Payment History
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-orange-500 p-1 text-white rounded" : ""
              }
              to={"/Dashboard/Annoucement"}
            >
              Announcements
            </NavLink>

            <Link to={"/"}>Home</Link>
          </div>
        )}
      </div>
      {/* -------------------- */}
      <div className="flex fixed bg-slate-400 top-0 w-full z-40 items-center justify-between lg:hidden">
        <img className="w-[40px]" src={logo} alt="" />
        <div onClick={() => setOpen(!open)} className="">
          {open ? (
            <IoCloseSharp size={25}></IoCloseSharp>
          ) : (
            <RiMenuAddFill size={25}></RiMenuAddFill>
          )}
        </div>
      </div>
      {/* -------------------------------- */}
      {open && (
        <div className=" bg-black h-screen  text-white mt-10 p-3">
          {role === "admin" && (
            <div className="flex flex-col gap-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-400 p-1 rounded" : ""
                }
                to={"/Dashboard/ManageUser"}
              >
                Mange User
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-400 p-1 rounded" : ""
                }
                to={"/Dashboard/AgreementRequest"}
              >
                Agreement Request
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-400 p-1 rounded" : ""
                }
                to={"/Dashboard/ManageCoupons"}
              >
                Manage Coupons
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-400 p-1 rounded" : ""
                }
                to={"/Dashboard/ManageAnnouncement"}
              >
                Announcement
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-400 p-1 rounded" : ""
                }
                to={"/"}
              >
                Home
              </NavLink>
            </div>
          )}
          {role === "user" && (
            <div className="flex flex-col gap-5">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-400 p-1 rounded" : ""
                }
                to={"/Dashboard/myProfile"}
              >
                Profile
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-400 p-1 rounded" : ""
                }
                to={"/Dashboard/Annoucement"}
              >
                Announcements
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-400 p-1 rounded" : ""
                }
                to={"/"}
              >
                Home
              </NavLink>
            </div>
          )}
          {role === "member" && (
            <div className="p-2 flex flex-col gap-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-500 p-1 text-white rounded" : ""
                }
                to={"/Dashboard/myProfile"}
              >
                My Profile
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-500 p-1 text-white rounded" : ""
                }
                to={"/Dashboard/makePayment"}
              >
                Make Payment
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-500 p-1 text-white rounded" : ""
                }
                to={"/Dashboard/PaymentHistory"}
              >
                Payment History
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-orange-500 p-1 text-white rounded" : ""
                }
                to={"/Dashboard/Annoucement"}
              >
                Announcements
              </NavLink>

              <Link to={"/"}>Home</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardNav;
