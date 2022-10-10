import React from "react";
import "./OptionCard.css";

const OptionCard = ({ optiondata }) => {
  const { first, second, third, fourth } = optiondata;
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
          />
        </label>
      </div>
    </div>
  );
};

export default OptionCard;
