import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./OptionCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OptionCard = ({ optiondata, correctAnswer }) => {
  let [count, setcount] = useState(0);
  const checkAnswer = () => {
    if (optiondata === correctAnswer) {
      toast.success("You got it Right");
      setcount(count + 1);
      console.log(count);
    } else {
      toast.error("You got it Wrong");
    }
  };
  return (
    <div>
      <div className='position form-control flex'>
        {optiondata}
        <label className='label cursor-pointer flex'>
          <span className='radiobox label-text flex'></span>
          <input
            type='radio'
            name='radio-6'
            className='radio checked:bg-blue-500'
            checked
            onClick={() => checkAnswer()}
          />
          <ToastContainer />
        </label>
      </div>
    </div>
  );
};

export default OptionCard;
