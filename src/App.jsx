import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Components/Pages/Home';
import ContactForm from './Components/ContactForm';
import Profile from './Components/Profile';
import Login from './Components/Pages/Login';


const App = () => {

  const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    errorElement:<h1>404 Error</h1>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/contacts",
        element:  <Table/>,
      },
      {
        path: "/login",
        element:  <Login/>,
      },
      
      {
        path: "/contactform",
        element:  <ContactForm/>,
      },
     
    ]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
