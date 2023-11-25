import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const axiosInterceptor = axios.create({
  baseURL: `http://localhost:5000/`,
});

const useInterceptor = () => {
  const { singOut } = useContext(AuthContext);
  const navigate = useNavigate;

  axiosInterceptor.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `barer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInterceptor.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response?.status;
      if (status === 403 || status === 401) {
        await singOut();
        navigate("/singin");
      }
      return Promise.reject(error);
    }
  );
  return axiosInterceptor;
};

export default useInterceptor;
