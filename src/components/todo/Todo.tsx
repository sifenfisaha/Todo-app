import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Filter from "./Filter";

const Todo: React.FC = () => {
  return (
    <div className="md:max-w-xl max-w-sm mt-12 mx-auto">
      <TodoInput />

      <TodoList />
      <Filter />
    </div>
  );
};

export default Todo;
