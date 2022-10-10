import React from "react";

const Card = ({ quizdt }) => {
  const { logo, name, total } = quizdt;
  console.log(quizdt);

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={logo} alt='Shoes' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>Total Quiz: {total}</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
