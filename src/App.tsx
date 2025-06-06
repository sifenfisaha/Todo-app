import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Todo from "./components/todo/Todo";

const App: React.FC = () => {
  return (
    <>
      <Background />
      <main className="pt-20 p-4">
        <Header></Header>
        <Todo />
      </main>
    </>
  );
};

export default App;
