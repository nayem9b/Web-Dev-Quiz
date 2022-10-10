import React from "react";
import OptionCard from "../OptionCard/OptionCard";

const QuizCard = ({ reletedqdata }) => {
  console.log(reletedqdata);
  const { question, options } = reletedqdata;
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
        {options.map((optiondata) => (
          <OptionCard optiondata={optiondata}></OptionCard>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
