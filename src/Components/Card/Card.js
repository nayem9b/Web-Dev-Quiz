import React from "react";
import { Link, NavLink } from "react-router-dom";

const Card = ({ quizdt }) => {
  const { logo, name, total, id } = quizdt;

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={logo} alt='Shoes' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>Total Quiz: {total}</p>
        <div className='card-actions'>
          <Link to={`/${id}`}>
            <button className='inline-flex items-center justify-center w-full mb-2 btn border-none btn-lg sm:w-auto sm:mb-0 text-white bg-orange-400 hover:text-black hover:bg-orange-400'>
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
