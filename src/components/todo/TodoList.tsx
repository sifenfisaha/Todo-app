import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.todos.filter);
  console.log(filter);
  return (
    <ul className="mt-6 shadow-sm">
      {todos.map((todo) => {
        if (filter === "all") {
          return <TodoItem key={todo.id} todo={todo} />;
        } else if (filter === "active") {
          if (!todo.completed) {
            return <TodoItem key={todo.id} todo={todo} />;
          } else {
            return null;
          }
        } else {
          if (todo.completed) {
            return <TodoItem key={todo.id} todo={todo} />;
          } else {
            return null;
          }
        }
      })}
    </ul>
  );
};

export default TodoList;
