import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./OptionCard.css";

const OptionCard = ({ optiondata }) => {
  return (
    <div>
      {/* <FontAwesomeIcon icon='fa-solid fa-eye' /> */}

      <div className='position form-control flex'>
        {optiondata}
        <label className='label cursor-pointer flex'>
          <span className='radiobox label-text flex'></span>
          <input
            type='radio'
            name='radio-6'
            className='radio checked:bg-blue-500'
            checked
            onClick={() => console.log("clicked")}
          />
        </label>
      </div>
    </div>
  );
};

export default OptionCard;
