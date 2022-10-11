import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

const Quizpage = () => {
  const loaderData = useLoaderData();
  const qdata = loaderData.data;

  const { name, id, questions, total } = qdata;
  console.log(qdata);

  return (
    <div>
      <h1 className='text-2xl'>
        Quiz of{" "}
        <span className='text-3xl font-bold text-purple-500'>{name}</span>
      </h1>
      <h1 className='mt-8 text-lg'>
        Number of questions{" "}
        <span className=' text-2xl text-purple-500 font-bold'>{total}</span>{" "}
      </h1>
      {questions.map((reletedqdata) => (
        <QuizCard reletedqdata={reletedqdata} key={reletedqdata.id}></QuizCard>
      ))}
    </div>
  );
};

export default Quizpage;
