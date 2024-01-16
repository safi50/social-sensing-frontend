import React from 'react';
import './customButton.css'; 

const CustomButton = ({ text, onClick }) => {
  console.log("hello", onClick)
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
