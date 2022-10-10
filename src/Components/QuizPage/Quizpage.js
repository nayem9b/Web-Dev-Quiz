import React from "react";
import {
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

const Quizpage = () => {
  const loaderData = useLoaderData();
  const qdata = loaderData.data;

  const { name, id, questions } = qdata;

  console.log(qdata);
  //   const params = useParams();
  //   const { name } = params;
  return (
    <div>
      <h1>This is quiz page</h1>
      <h1>Quiz of {name}</h1>
      {questions.map((reletedqdata) => (
        <QuizCard reletedqdata={reletedqdata} key={reletedqdata.id}></QuizCard>
      ))}
    </div>
  );
};

export default Quizpage;
