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
