import React from "react";
import { ToastContainer, toast } from "react-toastify";
import OptionCard from "../OptionCard/OptionCard";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
const QuizCard = ({ reletedqdata }) => {
  const { question, options, correctAnswer } = reletedqdata;

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
      <div className=' grid grid-cols-1 my-5 card lg:w-[900px] sm:w-auto md:auto bg-base-100 shadow-xl'>
        <div className='card-body'>
          <div className='flex justify-between'>
            <h2 className='card-title text-purple-500'>{question}</h2>
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

          {/* <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
          </div> */}

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
