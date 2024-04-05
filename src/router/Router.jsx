import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from '../components/landingPage/Landing';
import Details from '../components/details/Details';
import Values from '../components/values/Values';
 
const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Landing />,
        },
        {
            path: "/details/:id",
            element: <Details/>
        },
        {
            path: "/values/:val/:idx",
            element: <Values/>
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Router