import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <ul className="mt-6 shadow-sm">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
