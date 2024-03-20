import React from "react";

const Card = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-column justify-center items-center gap-x-5 p-5 rounded-md shadow-md">
      {children}
    </div>
  );
};

export default Card;
