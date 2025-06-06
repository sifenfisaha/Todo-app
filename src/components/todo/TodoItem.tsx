import React, { useState } from "react";
import type { Todo } from "../../types/types";
import chackIcon from "../../assets/icon-check.svg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleTodo } from "../../features/todos/todosSlice";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [isComplete, setIsCpmplete] = useState(todo.completed);
  const disptch = useAppDispatch();
  const handleCheck = (id: string) => {
    setIsCpmplete((prev) => !prev);
    disptch(toggleTodo(id));
  };

  return (
    <li className="relative  border-b-[0.5px] border-light-light-grayish dark:border-dark-dark-grayish">
      <div className="w-full bg-white text-lg dark:text-white p-4 pl-20 dark:bg-dark-desaturated focus:outline-none rounded-sm">
        <button
          onClick={() => handleCheck(todo.id)}
          type="submit"
          className={`absolute top-1/2 cursor-pointer -translate-y-1/2 left-6 w-6 h-6 border border-light-light-grayish hover:border-purple-300 dark:border-dark-dark-grayish rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
            isComplete ? " bg-gradient-to-r from-blue-500 to-purple-500 " : ""
          }`}
        >
          {isComplete && <img className="block" src={chackIcon} alt="check" />}
        </button>
        <span
          className={`${isComplete && "line-through text-dark-dark-grayish"}`}
        >
          {todo.text}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
