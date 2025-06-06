import React from "react";
import type { Todo } from "../../types/types";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <li className="relative  border-b-[0.5px] border-light-light-grayish dark:border-dark-dark-grayish">
      <div className="w-full bg-white text-lg dark:text-white p-4 pl-20 dark:bg-dark-desaturated focus:outline-none rounded-sm">
        <button
          type="submit"
          className="absolute top-1/2 cursor-pointer -translate-y-1/2 left-6 w-6 h-6 border border-light-light-grayish dark:border-dark-dark-grayish rounded-full"
        ></button>
        <span>{todo.text}</span>
      </div>
    </li>
  );
};

export default TodoItem;
