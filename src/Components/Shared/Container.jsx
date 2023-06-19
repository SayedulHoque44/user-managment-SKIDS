import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[2530px] mx-auto lg:px-20 md:px-10 sm:px-4 px-2 h-[500px]">
      {children}
    </div>
  );
};

export default Container;
