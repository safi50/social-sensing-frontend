import React from "react";

const OpenEmailButton = ({ email }) => {
  const handleClick = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleClick}>
      Open Email
    </button>
  );
};

export default OpenEmailButton;
