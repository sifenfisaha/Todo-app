import React, { useState } from "react";
import type { Todo } from "../../types/types";
import chackIcon from "../../assets/icon-check.svg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteTodo, toggleTodo } from "../../features/todos/todosSlice";
import deleteIcon from "../../assets/icon-cross.svg";

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
  const handleDelete = (id: string) => {
    console.log("dket");

    disptch(deleteTodo(id));
  };

  return (
    <li className="relative  border-b-[0.5px] group  border-light-light-grayish dark:border-dark-dark-grayish">
      <div className="w-full flex items-center justify-between pr-10 bg-white text-lg dark:text-white p-4 pl-20 dark:bg-dark-desaturated focus:outline-none rounded-sm">
        <div>
          <button
            onClick={() => handleCheck(todo.id)}
            type="submit"
            className={`absolute top-1/2 cursor-pointer -translate-y-1/2 left-6 w-6 h-6 border border-light-light-grayish hover:border-purple-300 dark:border-dark-dark-grayish rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${
              isComplete ? " bg-gradient-to-r from-blue-500 to-purple-500 " : ""
            }`}
          >
            {isComplete && (
              <img className="block" src={chackIcon} alt="check" />
            )}
          </button>
          <span
            className={`${isComplete && "line-through text-dark-dark-grayish"}`}
          >
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => handleDelete(todo.id)}
          className="cursor-pointer md:opacity-0 md:group-hover:opacity-100"
        >
          <img src={deleteIcon} alt="cross" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
