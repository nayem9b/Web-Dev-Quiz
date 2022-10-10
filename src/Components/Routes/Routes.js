import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Errorpage/Errorpage";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [{ path: "*", element: <Errorpage></Errorpage> }],
  },
]);

export default router;
