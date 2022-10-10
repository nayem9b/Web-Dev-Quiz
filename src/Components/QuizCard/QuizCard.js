import React from "react";
import OptionCard from "../OptionCard/OptionCard";

const QuizCard = ({ reletedqdata }) => {
  console.log(reletedqdata);
  const { question, options } = reletedqdata;
  return (
    <div>
      <div className=' grid my-5 card w-[900px] bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title text-purple-500'>{question}</h2>

          {options.map((optiondata) => (
            <OptionCard optiondata={optiondata}></OptionCard>
          ))}
        </div>
      </div>
      {/* {options.map((optiondata) => (
        <OptionCard optiondata={optiondata}></OptionCard>
      ))} */}
    </div>
  );
};

export default QuizCard;
