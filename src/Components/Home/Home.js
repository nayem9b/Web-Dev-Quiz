import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loaderData = useLoaderData();
  return (
    <div>
      <h1> hello im from home</h1>
    </div>
  );
};

export default Home;
