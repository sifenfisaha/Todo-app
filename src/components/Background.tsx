import React from "react";

const Background: React.FC = () => {
  return (
    <>
      <div className="z-[-100] bg-[url('/bg-desktop-light.jpg')] dark:bg-[url('bg-desktop-dark.jpg')] hidden md:block absolute top-0  bg-cover bg-center  w-full h-[40%]"></div>
      <div className="z-[-100] bg-[url('/bg-mobile-light.jpg')] dark:bg-[url('/bg-mobile-dark.jpg')]  h-[40%]  md:hidden absolute top-0  bg-cover bg-center w-full"></div>
    </>
  );
};

export default Background;
