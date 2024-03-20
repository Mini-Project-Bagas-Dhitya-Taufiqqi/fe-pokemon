import React from "react";

const Card = ({ children, onClick, props, type }) => {
  return (
    <>
      {type === "list" ? (
        <div
          onClick={onClick}
          {...props}
          className="w-full h-full flex flex-column justify-center items-center gap-x-5 p-5 rounded-md shadow-md cursor-pointer bg-white hover:bg-slate-100"
        >
          {children}
        </div>
      ) : (
        type === "information" && (
          <div
            {...props}
            className="w-full h-full lg:flex md:flex justify-center items-center gap-x-5 p-5 rounded-md shadow-md bg-white"
          >
            {children}
          </div>
        )
      )}
    </>
  );
};

export default Card;
