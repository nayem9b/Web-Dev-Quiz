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
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center'>
        {QuizData.map((quizdt) => (
          <Card key={quizdt.total} quizdt={quizdt}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
