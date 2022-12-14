import React from "react";
import { ToastContainer } from "react-toastify";
import OptionCard from "../OptionCard/OptionCard";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
const QuizCard = ({ reletedqdata }) => {
  const { question, options, correctAnswer } = reletedqdata;
  const splitedQuestion = question.split("<p>");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return (
    <div>
      <div className=' grid grid-cols-1 my-5 card lg:w-[900px] sm:w-auto md:auto bg-base-100 lg:ml-80  justify-center items-center shadow-xl'>
        <div className='card-body '>
          <div className='flex justify-between'>
            <h2 className='card-title text-purple-500 text-left'>
              {splitedQuestion}
            </h2>
            <button
              onClick={() =>
                Toast.fire({
                  icon: "success",
                  title: correctAnswer,
                })
              }>
              {" "}
              <FontAwesomeIcon className='mt-2 order-last' icon={faEye} />
              <ToastContainer />
            </button>
          </div>

          {options.map((optiondata) => (
            <OptionCard
              optiondata={optiondata}
              correctAnswer={correctAnswer}></OptionCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
