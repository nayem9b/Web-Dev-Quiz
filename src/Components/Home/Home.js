import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Header from "../Header/Header";

const Home = () => {
  const loaderData = useLoaderData();
  const QuizData = loaderData.data;
  return (
    <div>
      <Header></Header>
      {QuizData.map((quizdt) => (
        <Card key={quizdt.total} quizdt={quizdt}></Card>
      ))}
    </div>
  );
};

export default Home;
