import React from "react";
import { ToastContainer, toast } from "react-toastify";
import OptionCard from "../OptionCard/OptionCard";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
const QuizCard = ({ reletedqdata }) => {
  const { question, options, correctAnswer } = reletedqdata;
  const notify = () => toast("Wow so easy!");
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
      <div className=' grid my-5 card w-[900px] bg-base-100 shadow-xl'>
        <div className='card-body'>
          <button
            onClick={() =>
              Toast.fire({
                icon: "success",
                title: "Signed in successfully",
              })
            }>
            {" "}
            <FontAwesomeIcon className='mt-2' icon={faEye} />
            <ToastContainer />
          </button>
          {/* <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
          </div> */}

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
