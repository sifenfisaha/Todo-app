import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addTodo } from "../../features/todos/todosSlice";

const TodoInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleAddTodo} className="relative">
      <button
        type="submit"
        className="absolute top-1/2 cursor-pointer -translate-y-1/2 left-6 w-6 h-6 border border-light-light-grayish dark:border-dark-dark-grayish rounded-full"
      ></button>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full bg-white text-lg dark:text-white p-4 pl-20 dark:bg-dark-desaturated focus:outline-none rounded-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
