import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";
import Quizpage from "../QuizPage/Quizpage";
import Root from "../Root/Root";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "home",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/",
        element: <Topics></Topics>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/:id",

        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Quizpage></Quizpage>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },

      { path: "*", element: <Errorpage></Errorpage> },
    ],
  },
]);

export default router;
