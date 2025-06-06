import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <main className="pt-20">
        <Header></Header>
        <Background />
      </main>
    </>
  );
};

export default App;
