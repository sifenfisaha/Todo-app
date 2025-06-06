import React from "react";

const Filter: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full shadow-sm flex items-center justify-between bg-white text-lg dark:text-white p-4  dark:bg-dark-desaturated focus:outline-none rounded-sm">
          <span>5 elements left</span>

          <button>clear compleated</button>
        </div>
        <div className="md:flex gap-2 hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <button className="dark:text-white">All</button>
          <button className="dark:text-white">Active</button>
          <button className="dark:text-white">completed</button>
        </div>
        <div className="flex gap-4 md:hidden w-full  items-center justify-center mt-6 shadow-sm bg-white text-lg dark:text-white p-4  dark:bg-dark-desaturated focus:outline-none rounded-sm ">
          <button className="dark:text-white">All</button>
          <button className="dark:text-white">Active</button>
          <button className="dark:text-white">completed</button>
        </div>
      </div>
    </>
  );
};

export default Filter;
