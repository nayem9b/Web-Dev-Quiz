import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const loaderData = useLoaderData();
  const QuizData = loaderData.data;
  return (
    <div>
      <h1> hello im from home</h1>
      {QuizData.map((quizdt) => (
        <Card key={quizdt.id} quizdt={quizdt}></Card>
      ))}
      <Card></Card>
    </div>
  );
};

export default Home;
