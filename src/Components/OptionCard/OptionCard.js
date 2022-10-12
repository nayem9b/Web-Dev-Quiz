import React from "react";
import "./OptionCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OptionCard = ({ optiondata, correctAnswer }) => {
  const checkAnswer = () => {
    if (optiondata === correctAnswer) {
      toast.success("You got it Right", {
        theme: "colored",
        autoClose: 700,
      });
    } else {
      toast.error("You got it Wrong", {
        theme: "colored",
        autoClose: 700,
      });
    }
  };
  return (
    <div>
      <div className='position form-control flex text-left'>
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
          <ToastContainer theme='light'></ToastContainer>
        </label>
      </div>
    </div>
  );
};

export default OptionCard;
