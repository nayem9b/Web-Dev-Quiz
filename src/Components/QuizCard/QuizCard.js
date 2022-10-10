import React from "react";

const QuizCard = ({ reletedqdata }) => {
  console.log(reletedqdata);
  const { question } = reletedqdata;
  return (
    <div>
      <h1> {question} </h1>
      <div className='form-control flex justify-center'>
        <label className='label cursor-pointer'>
          <span className='label-text text-2xl'>Hello</span>
          <input
            type='radio'
            name='radio-6'
            className='radio checked:bg-blue-500'
            checked
          />
        </label>
      </div>
    </div>
  );
};

export default QuizCard;
