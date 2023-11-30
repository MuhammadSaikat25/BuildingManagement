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
import AgreementRequest from "./page/Dahsboard/Admin/AgreementRequest";
import ManageCoupons from "./page/Dahsboard/Admin/ManageCoupons";
import MyProfile from "./page/Dahsboard/MyProfile";
import Announcement from "./page/Dahsboard/Announcement";
import MakePayment from "./page/Dahsboard/Members/MakePayment";
import PaymentHistory from "./page/Dahsboard/Members/PaymentHistory";
import ManageUsers from "./page/Dahsboard/Admin/ManageUsers";
import Payment from "./page/Dahsboard/Members/Payment";
import UserRoute from "./Firebase/PrivateRoutes/UserRoute";
import MemberRoute from "./Firebase/PrivateRoutes/MemberRoute";
import AdminRoute from "./Firebase/PrivateRoutes/AdminRoute";
import ManageAnnouncement from "./page/Dahsboard/Admin/ManageAnnouncement";
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
    element:<UserRoute><Dashboard></Dashboard></UserRoute>,
    children:[
      {
        path:'myProfile',
        element:<UserRoute><MyProfile></MyProfile></UserRoute>
      },
      {
        path:'ManageUser',
        element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path:'AgreementRequest',
        element:<AdminRoute><AgreementRequest></AgreementRequest></AdminRoute>
      },
      {
        path:'ManageCoupons',
        element:<AdminRoute><ManageCoupons></ManageCoupons></AdminRoute>
      },
      {
        path:'Annoucement',
        element:<UserRoute><Announcement></Announcement></UserRoute>
      },
      {
        path:'makePayment',
        element:<MemberRoute><MakePayment></MakePayment></MemberRoute>
      },
      {
        path:"PaymentHistory",
        element:<MemberRoute><PaymentHistory></PaymentHistory></MemberRoute>
      },
      {
        path:"ManageAnnouncement",
        element:<ManageAnnouncement></ManageAnnouncement>
      },
      {
        path:"payment",
        element:<MemberRoute><Payment></Payment></MemberRoute>
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
