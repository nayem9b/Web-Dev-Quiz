import React from "react";

const OptionCard = ({ optiondata }) => {
  const { first, second, third, fourth } = optiondata;
  return (
    <div>
      <h1>{optiondata}</h1>
    </div>
  );
};

export default OptionCard;
