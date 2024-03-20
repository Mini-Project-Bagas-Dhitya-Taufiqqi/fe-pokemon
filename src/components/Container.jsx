import React from "react";

const Container = ({ children }) => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center p-10 bg-white">
      {children}
    </section>
  );
};

export default Container;
