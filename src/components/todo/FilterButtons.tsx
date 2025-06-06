import React, { useState } from "react";
import type { Filter } from "../../types/types";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setFilter } from "../../features/todos/todosSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

const FilterButtons: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const dispatch = useAppDispatch();
  function handleFilterTodod(filter: Filter) {
    setActiveFilter(filter);
    dispatch(setFilter(filter));
  }

  const filters: Filter[] = ["all", "active", "completed"];

  const getButtonClass = (filter: string) =>
    `${
      activeFilter === filter
        ? "text-primary-blue font-bold"
        : "text-light-dark-grayish"
    } transition-colors`;

  return (
    <>
      {/* Desktop */}
      <div className="md:flex gap-2 hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterTodod(filter)}
            className={getButtonClass(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex gap-4 md:hidden w-full items-center justify-center mt-6 shadow-sm bg-white text-lg dark:text-white p-4 dark:bg-dark-desaturated focus:outline-none rounded-sm">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterTodod(filter)}
            className={getButtonClass(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterButtons;
