import React from "react";

const Card = ({ children, onClick, props }) => {
  return (
    <div
      onClick={onClick}
      {...props}
      className="w-full h-full flex flex-column justify-center items-center gap-x-5 p-5 rounded-md shadow-md cursor-pointer hover:bg-slate-100"
    >
      {children}
    </div>
  );
};

export default Card;
