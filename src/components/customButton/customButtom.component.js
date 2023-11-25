import React from 'react';
import './customButton.css'; 

const CustomButton = ({ text }) => {
  return (
    <button className="custom-button">
      {text}
    </button>
  );
};

export default CustomButton;
