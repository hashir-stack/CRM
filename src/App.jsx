import React from "react";
import "./App.css";
import Table from "./Components/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Pages/Home";
import ContactForm from "./Components/ContactForm";
import Profile from "./Components/Profile";
import Login from "./Components/Pages/Login";
import Unauth from "./Components/Unauth";
import LandingPage from "./Components/Pages/LandingPage";
import EmpLogin from "./Components/Pages/EmpLogin";
import CustLogin from "./Components/Pages/CustLogin";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      errorElement: <h1>404 Error</h1>,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/contacts",
          element: <Table />,
        },
        {
          path: "/adlogin",
          element: <Login />,
        },
        {
          path: "/emplogin",
          element: <EmpLogin/>,
        },
        {
          path: "/custlogin",
          element: <CustLogin />,
        },
        {
          path: "/contactform",
          element: <ContactForm />,
        },
        {
          path: "/unauth",
          element: <Unauth />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
