import React from "react";
import OptionCard from "../OptionCard/OptionCard";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const QuizCard = ({ reletedqdata }) => {
  const { question, options, correctAnswer } = reletedqdata;
 const 
  return (
    <div>
      <div className=' grid my-5 card w-[900px] bg-base-100 shadow-xl'>
        <div className='card-body'>
          <button onClick={() => console.log("eye clicked")}>
            <FontAwesomeIcon className='mt-2' icon={faEye} />
          </button>

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
