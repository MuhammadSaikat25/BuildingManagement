import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./page/Home/Home";
import AuthProvider from "./Firebase/AuthProvider";
import Register from "./components/Register";
import SingIn from "./components/SingIn";
import { QueryClient, QueryClientProvider } from "react-query";
import Apartments from "./page/Apartments/Apartments";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./page/Dahsboard/Dashboard";
import ManageUses from "./page/Dahsboard/Admin/ManageUses";
import AgreementRequest from "./page/Dahsboard/Admin/AgreementRequest";
import ManageCoupons from "./page/Dahsboard/Admin/ManageCoupons";
import MyProfile from "./page/Dahsboard/MyProfile";
import Announcement from "./page/Dahsboard/Announcement";
import MakePayment from "./page/Dahsboard/Members/MakePayment";
import PaymentHistory from "./page/Dahsboard/Members/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/aparnments',
        element:<Apartments></Apartments>
      }
    ],
  },
  {
    path: "/singup",
    element: <Register></Register>,
  },
  {
    path: "singin",
    element: <SingIn></SingIn>,
  },
  {
    path:"/Dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'myProfile',
        element:<MyProfile></MyProfile>
      },
      {
        path:'ManageUser',
        element:<ManageUses></ManageUses>
      },
      {
        path:'AgreementRequest',
        element:<AgreementRequest></AgreementRequest>
      },
      {
        path:'ManageCoupons',
        element:<ManageCoupons></ManageCoupons>
      },
      {
        path:'Annoucement',
        element:<Announcement></Announcement>
      },
      {
        path:'makePayment',
        element:<MakePayment></MakePayment>
      },
      {
        path:"PaymentHistory",
        element:<PaymentHistory></PaymentHistory>
      }
    ]
  }
]);
<ToastContainer />
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
