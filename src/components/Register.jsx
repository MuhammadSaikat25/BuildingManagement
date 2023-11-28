import img from "../assets/homeImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase";
import axios from "axios";

const Register = () => {
  const { google, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const Auth = getAuth(app);
  const { singUp } = useContext(AuthContext);
  const [hidden, setHidden] = useState(false);

  const creatUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const em = e.target.email.value;
    const email=em.toLowerCase()
    const password = e.target.password.value;
    try {
      const res = await singUp(email, password);
      const update = await updateProfile(Auth.currentUser, {
        displayName: name,
      });
      const userInfo = { email, name, role: "user" };
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER}addUser`,
        userInfo
      );
      navigate("/");
      setError("");
    } catch (error) {
      setError("Email already exist");
      // console.error("Error:", error.error);
    }
  };

  const Google = async () => {
    try {
      setError("");
      const res = await google();
      console.log(res);
      navigate("/");
      const obj = {
        email: res.user?.email,
        name: res.user?.displayName,
        role: "user",
      };
      const googleRes = await axios.post(
        `${import.meta.env.VITE_SERVER}addUser`,
        obj
      );
    } catch (error) {
      console.log(error.massage);
    }
  };
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={img} alt="" />
      <div className="w-full h-full absolute z-10 bg-black top-0 opacity-60"></div>
      <div className=" h-[50%] absolute z-30 lg:left-[550px] top-[200px] md:left-40 md:top-[250px] lg:top-[180px] opacity-80">
        <div className="bg-white relative rounded-md p-10 w-[400px]">
          <form onSubmit={creatUser} className="flex gap-4 flex-col">
            <input
              className="border-black border rounded p-2"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="border-black border rounded p-2"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="border-black border rounded p-2"
              type={`${hidden ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 p-1 rounded text-white"
            >
              Sing Up
            </button>
            <div
              className="absolute top-[170px] right-14"
              onClick={() => setHidden(!hidden)}
            >
              {hidden ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}
            </div>
            {/* <h1 className="text-center text-red-600">{error}</h1> */}
          </form>
          <div className="">
            <div className="flex items-center">
              <div className="w-full bg-slate-800 h-[1px]"></div>
              <h1>OR</h1>
              <div className="w-full bg-slate-800 h-[1px]"></div>
            </div>
            <button
              onClick={Google}
              className="bg-blue-800 p-1 rounded w-full text-white"
            >
              Google
            </button>
            <div className="flex items-center justify-center mt-3">
              <h1>Already have an account ? </h1>
              <Link to={"/singin"} className="text-blue-800">
                sing In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
