import React from "react";
import error from "../../images/97041-error-page.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <h1 className='text-5xl pb-10'>Opps! An error occured</h1>
      <div className=' flex justify-center lg:ml-[400px] lg:mt-[-66px] md:h-[100px] md:w-[100px] lg:h-[800px] sm:h-[100px] sm:w-[300px] lg:w-[800px]'>
        <Lottie animationData={error} loop={true} />
      </div>
      <Link to='/'>
        <button className='inline-flex items-center justify-center  mb-2 btn border-none btn-md sm:w-auto sm:mb-0 text-white bg-red-500 hover:bg-red-600'>
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Errorpage;
